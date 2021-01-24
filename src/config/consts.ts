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
  scale: 1,
  color: vars.colors.black,
  brushSize: 10,
  tool: Tool.move,
  pressedKeys: [],
  layers: [],
  selectedLayer: null,
};

export const MOBILE_WIDTH = 700;

export const MAX_CANVAS_WIDTH = 800;

export const MAX_SIDEBAR_WIDTH = 200;

export const ZOOM_DELTA = 0.01;
