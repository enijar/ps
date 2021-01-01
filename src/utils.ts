import { ActionType } from "./config/types";
import { ACTION_MOVE, ACTION_ZOOM } from "./config/consts";

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function getCursor(action: ActionType, keys: string[] = []): string {
  switch (action) {
    case ACTION_MOVE:
      return "move";
    case ACTION_ZOOM:
      if (keys.includes("alt")) {
        return "zoom-out";
      }
      return "zoom-in";
    default:
      return "default";
  }
}
