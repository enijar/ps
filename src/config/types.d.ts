import { ACTION_MOVE, ACTION_ZOOM } from "./consts";

export type ActionType = null | ACTION_MOVE | ACTION_ZOOM;

export type Pointer = {
  startX: number;
  startY: number;
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  down: boolean;
};
