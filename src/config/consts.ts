export const ACTION_MOVE = "move";
export const ACTION_ZOOM = "zoom";

export const MOVE_MIN = -0.5;
export const MOVE_MAX = 0.5;

export const ZOOM_AMOUNT = 0.1;
export const ZOOM_MIN = 0.25;
export const ZOOM_MAX = 2;

export const OPACITY_AMOUNT = 0.01;
export const OPACITY_MIN = 0;
export const OPACITY_MAX = 1;

export const ROTATION_MIN = 0;
export const ROTATION_MAX = 360;
export const ROTATION_AMOUNT = 1;

export const GREYSCALE_MIN = 0;
export const GREYSCALE_MAX = 1;
export const GREYSCALE_AMOUNT = 0.01;

export const CONTRAST_MIN = 0;
export const CONTRAST_MAX = 3;
export const CONTRAST_AMOUNT = 0.01;

export const DEFAULTS = {
  position: {
    x: 0,
    y: 0,
  },
  opacity: 1,
  rotation: 0,
  zoom: 1,
  flipX: 1,
  flipY: 1,
  grayscale: 0,
  contrast: 1,
};
