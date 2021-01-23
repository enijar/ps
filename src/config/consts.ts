import vars from "./vars";
import { Tool } from "./types";

export const DEFAULTS = {
  position: {
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  },
  filters: {
    blur: 0,
    saturation: 1,
    hue: 0,
    sepia: false,
  },
  pointGroups: [],
  pointGroupIndex: -1,
  color: vars.colors.black,
  brushSize: 10,
  rotation: 0,
  tool: Tool.move,
  opacity: 1,
  scale: 1,
  pressedKeys: [],
  layers: [],
};

export const MOBILE_WIDTH = 700;

export const MAX_CANVAS_WIDTH = 800;

export const MAX_SIDEBAR_WIDTH = 200;

export const ZOOM_DELTA = 0.01;
