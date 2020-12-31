import React from "react";
import { ActionType, Pointer } from "../../types";
import { clamp } from "../utils";
import emitter from "../services/emitter";
import { ACTION_MOVE } from "../../consts";

export default function usePointer(
  wrapper: React.MutableRefObject<HTMLDivElement | null>,
  img: React.MutableRefObject<HTMLImageElement | null>
): Pointer {
  const [action, setAction] = React.useState<ActionType>(null);
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

    function onMouseDown(event: MouseEvent): void {
      if (action !== ACTION_MOVE) return;
      if (wrapperElement === null) return;
      const { width, height } = wrapperElement.getBoundingClientRect();
      setPointer((pointer) => {
        const x = clamp(event.pageX, 0, width) / width;
        const y = clamp(event.pageY, 0, height) / height;
        pointer.startX = x;
        pointer.startY = y;
        pointer.x = x - pointer.startX + pointer.lastX;
        pointer.y = y - pointer.startY + pointer.lastY;
        pointer.down = true;
        return { ...pointer };
      });
    }

    function onMouseMove(event: MouseEvent): void {
      if (action !== ACTION_MOVE) return;
      if (wrapperElement === null) return;
      const { width, height } = wrapperElement.getBoundingClientRect();
      setPointer((pointer) => {
        const x = clamp(event.pageX, 0, width) / width;
        const y = clamp(event.pageY, 0, height) / height;
        pointer.x = x - pointer.startX + pointer.lastX;
        pointer.y = y - pointer.startY + pointer.lastY;
        return { ...pointer };
      });
    }

    function onMouseUp(event: MouseEvent): void {
      if (action !== ACTION_MOVE) return;
      setPointer((pointer) => {
        if (event.target === imgElement) {
          pointer.lastX = pointer.x;
          pointer.lastY = pointer.y;
        }
        pointer.down = false;
        return { ...pointer };
      });
    }

    imgElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return (): void => {
      imgElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [wrapper, img, action]);

  React.useEffect(() => {
    return emitter.subscribe("action", setAction);
  }, []);

  return pointer;
}
