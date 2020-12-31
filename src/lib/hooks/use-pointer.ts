import React from "react";
import { Pointer } from "../canvas/types";

export default function usePointer(
  wrapper: React.MutableRefObject<HTMLDivElement | null>,
  img: React.MutableRefObject<HTMLImageElement | null>
): Pointer {
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
      if (wrapperElement === null) return;
      setPointer((pointer) => {
        pointer.startX = event.pageX;
        pointer.startY = event.pageY;
        pointer.x = event.pageX - pointer.startX + pointer.lastX;
        pointer.y = event.pageY - pointer.startY + pointer.lastY;
        pointer.down = true;
        return { ...pointer };
      });
    }
    function onMouseMove(event: MouseEvent): void {
      if (wrapperElement === null) return;
      setPointer((pointer) => {
        pointer.x = event.pageX - pointer.startX + pointer.lastX;
        pointer.y = event.pageY - pointer.startY + pointer.lastY;
        return { ...pointer };
      });
    }
    function onMouseUp(event: MouseEvent): void {
      setPointer((pointer) => {
        pointer.lastX = pointer.x;
        pointer.lastY = pointer.y;
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
  }, [wrapper, img]);

  return pointer;
}
