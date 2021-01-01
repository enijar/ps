import { ActionType } from "./config/types";

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function getCursor(action: ActionType): string {
  switch (action) {
    case "move":
      return "move";
    case "zoom":
      return "zoom-in";
    default:
      return "default";
  }
}
