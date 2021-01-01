import React from "react";
import { Pointer } from "../config/types";
import { clamp } from "../utils";
import { PsContext, PsContextType } from "../context/ps";
import { ACTION_MOVE } from "../config/consts";

const MOVE_MIN = -0.5;
const MOVE_MAX = 0.5;

export default function usePointer(
  wrapper: React.MutableRefObject<HTMLDivElement | null>,
  img: React.MutableRefObject<HTMLImageElement | null>
): Pointer {
  const { action } = React.useContext(PsContext) as PsContextType;
  const [pointer, setPointer] = React.useState<Pointer>({
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    down: false,
  });

  React.useEffect(() => {
    const wrapperElement = wrapper.current;
    const imgElement = img.current;

    if (imgElement === null) return;

    function onPointerDown(event: PointerEvent): void {
      if (action === null) return;
      if (wrapperElement === null) return;
      const { width, height } = wrapperElement.getBoundingClientRect();
      setPointer((pointer) => {
        if (action === ACTION_MOVE) {
          const x = clamp(event.pageX, 0, width) / width;
          const y = clamp(event.pageY, 0, height) / height;
          pointer.startX = x;
          pointer.startY = y;
          pointer.x = clamp(
            x - pointer.startX + pointer.lastX,
            MOVE_MIN,
            MOVE_MAX
          );
          pointer.y = clamp(
            y - pointer.startY + pointer.lastY,
            MOVE_MIN,
            MOVE_MAX
          );
        }
        pointer.down = event.target === imgElement;
        return { ...pointer };
      });
    }

    function onPointerMove(event: PointerEvent): void {
      if (action === null) return;
      if (wrapperElement === null) return;
      if (!pointer.down) return;
      const { width, height } = wrapperElement.getBoundingClientRect();
      setPointer((pointer) => {
        if (action === ACTION_MOVE) {
          const x = clamp(event.pageX, 0, width) / width;
          const y = clamp(event.pageY, 0, height) / height;
          pointer.x = clamp(
            x - pointer.startX + pointer.lastX,
            MOVE_MIN,
            MOVE_MAX
          );
          pointer.y = clamp(
            y - pointer.startY + pointer.lastY,
            MOVE_MIN,
            MOVE_MAX
          );
        }
        return { ...pointer };
      });
    }

    function onPointerUp(): void {
      if (action === null) return;
      if (!pointer.down) return;
      setPointer((pointer) => {
        if (action === ACTION_MOVE) {
          pointer.lastX = pointer.x;
          pointer.lastY = pointer.y;
        }
        pointer.down = false;
        return { ...pointer };
      });
    }

    imgElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return (): void => {
      imgElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [wrapper, img, action, pointer.down]);

  return pointer;
}
