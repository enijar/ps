import { ACTION_MOVE } from "./consts";

export type ActionType = ACTION_MOVE | null;

export type Pointer = {
  startX: number;
  startY: number;
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  down: boolean;
};
