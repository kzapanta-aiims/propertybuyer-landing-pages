/* Live Paper shaders, progressive enhancement.
   The exported stills stay in the markup as the rendered fallback; each
   shader mounts a canvas over its still and fades the still out only once
   the first frame is up. If WebGL, this module, or an asset fails, the
   stills simply remain. Parameters are verbatim from the Paper file
   01KZW0Y27PGW3NV0QJRPXAJ9DZ, artboard "BUYER 1440".
   Library: @paper-design/shaders v0.0.80, self hosted under
   assets/vendor/paper-shaders (MIT), no CDN. */

import { ShaderMount } from '../vendor/paper-shaders/shader-mount.js';
import { getShaderColorFromString } from '../vendor/paper-shaders/get-shader-color-from-string.js';
import { getShaderNoiseTexture } from '../vendor/paper-shaders/get-shader-noise-texture.js';
import { ShaderFitOptions } from '../vendor/paper-shaders/shader-sizing.js';
import { grainGradientFragmentShader, GrainGradientShapes } from '../vendor/paper-shaders/shaders/grain-gradient.js';
import { liquidMetalFragmentShader, toProcessedLiquidMetal, LiquidMetalShapes } from '../vendor/paper-shaders/shaders/liquid-metal.js';
import { flutedGlassFragmentShader, GlassGridShapes, GlassDistortionShapes } from '../vendor/paper-shaders/shaders/fluted-glass.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const IMG = '../../assets/img/';

function sizing(overrides) {
  return Object.assign({
    u_fit: ShaderFitOptions.contain,
    u_scale: 1,
    u_rotation: 0,
    u_offsetX: 0,
    u_offsetY: 0,
    u_originX: 0.5,
    u_originY: 0.5,
    u_worldWidth: 0,
    u_worldHeight: 0,
  }, overrides || {});
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/* Mount a shader into a host div layered over `stillEl`, then fade the
   still. Returns the mount so callers can adjust it. */
function mountOver(stillEl, fragment, uniforms, speed, frame) {
  const host = document.createElement('div');
  host.className = 'shader-host';
  stillEl.insertAdjacentElement('afterend', host);
  const mount = new ShaderMount(host, fragment, uniforms, undefined, reduced ? 0 : speed, frame);
  requestAnimationFrame(() => stillEl.classList.add('still-behind-shader'));
  return mount;
}

const noiseTexture = getShaderNoiseTexture ? getShaderNoiseTexture() : undefined;

/* The noise texture is a data-URI image that still decodes async; ShaderMount
   refuses images that are not complete, so wait for it. */
async function readyNoiseTexture() {
  if (!noiseTexture) return undefined;
  if (!noiseTexture.complete) {
    await new Promise((resolve) => {
      noiseTexture.onload = resolve;
      noiseTexture.onerror = () => resolve();
    });
  }
  return noiseTexture.complete && noiseTexture.naturalWidth > 0 ? noiseTexture : undefined;
}

/* ---- Prestige: grain gradient background ------------------------------- */
async function prestigeGrain() {
  const band = document.querySelector('.prestige');
  if (!band) return;
  const noise = await readyNoiseTexture();
  const host = document.createElement('div');
  host.className = 'shader-host shader-host--band';
  band.prepend(host);
  new ShaderMount(host, grainGradientFragmentShader, sizing({
    u_scale: 1.93,
    u_colorBack: getShaderColorFromString('#00000000'),
    u_colors: ['#001114', '#202020', '#464646', '#00404B'].map(getShaderColorFromString),
    u_colorsCount: 4,
    u_softness: 1,
    u_intensity: 0.26,
    u_noise: 0.19,
    u_shape: GrainGradientShapes.corners,
    u_noiseTexture: noise,
  }), undefined, reduced ? 0 : 1, 147046.53);
}

/* ---- Prestige: liquid metal mark ---------------------------------------- */
async function prestigeLiquid() {
  const still = document.querySelector('.prestige-visual img');
  if (!still) return;
  const processed = await toProcessedLiquidMetal(IMG + 'prestige-mark.svg');
  const url = URL.createObjectURL(processed.pngBlob);
  const img = await loadImage(url);
  mountOver(still, liquidMetalFragmentShader, sizing({
    u_scale: 0.6,
    u_image: img,
    u_isImage: true,
    u_colorBack: getShaderColorFromString('#00000000'),
    u_colorTint: getShaderColorFromString('#FFFFFF'),
    u_repetition: 2,
    u_softness: 0.1,
    u_shiftRed: 0.3,
    u_shiftBlue: 0.3,
    u_distortion: 0.07,
    u_contour: 0.4,
    u_angle: 70,
    u_shape: LiquidMetalShapes.diamond,
  }), 1, 349839.6);
}

/* ---- Fluted glass caption strips ---------------------------------------- */
const GLASS_SOURCES = {
  'truth-glass-1': 'glass-src-truth-1.webp',
  'truth-glass-2': 'glass-src-truth-2.webp',
  'truth-glass-3': 'glass-src-truth-3.webp',
  'truth-glass-4': 'glass-src-truth-4.webp',
  'auction-glass-1': 'glass-src-auction-1.webp',
  'auction-glass-2': 'glass-src-auction-2.webp',
  'auction-glass-3': 'glass-src-auction-3.webp',
};

async function flutedStrips() {
  const stills = document.querySelectorAll('.truth-card__glass, .auction-photo__glass');
  for (const still of stills) {
    const key = Object.keys(GLASS_SOURCES).find((k) => still.src.includes(k));
    if (!key) continue;
    try {
      const img = await loadImage(IMG + GLASS_SOURCES[key]);
      mountOver(still, flutedGlassFragmentShader, sizing({
        u_image: img,
        u_colorBack: getShaderColorFromString('#00000000'),
        u_colorHighlight: getShaderColorFromString('#FFFFFF'),
        u_colorShadow: getShaderColorFromString('#000000'),
        u_highlights: 0.15,
        u_shadows: 0.29,
        u_size: 0.73,
        u_shape: GlassGridShapes.lines,
        u_angle: 92, /* -88 in Paper; the uniform takes 0 to 180 */
        u_distortionShape: GlassDistortionShapes.prism,
        u_distortion: 1,
        u_shift: 0,
        u_stretch: 1,
        u_blur: 1,
        u_edges: 0.25,
        u_marginLeft: 0,
        u_marginRight: 0,
        u_marginTop: 0,
        u_marginBottom: 0,
        u_grainMixer: 0,
        u_grainOverlay: 0,
      }), 0, 0);
    } catch (e) {
      /* Still stays visible; nothing to undo. */
      console.warn('fluted glass mount failed:', e);
    }
  }
}

/* WebGL sanity check before doing any work. */
function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) {
    return false;
  }
}

if (webglAvailable()) {
  prestigeGrain().catch((e) => console.warn('grain mount failed:', e));
  prestigeLiquid().catch((e) => console.warn('liquid mount failed:', e));
  flutedStrips().catch((e) => console.warn('fluted strips failed:', e));
}
