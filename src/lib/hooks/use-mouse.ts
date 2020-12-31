import React from "react";

type Mouse = {
  x: number;
  y: number;
  startX: number;
  startY: number;
  down: boolean;
};

export default function useMouse(
  wrapper: React.MutableRefObject<HTMLDivElement | null>,
  img: React.MutableRefObject<HTMLImageElement | null>,
  width: number,
  height: number
) {
  const [mouse, setMouse] = React.useState<Mouse>({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    down: false,
  });

  React.useEffect(() => {
    const wrapperElement: HTMLDivElement | null = img.current;
    const targetElement: HTMLImageElement | null = img.current;

    if (wrapperElement === null) return;
    if (targetElement === null) return;

    function onMouseDown(event: MouseEvent) {
      if (wrapperElement === null) return;
      const { left, top } = wrapperElement.getBoundingClientRect();
      setMouse((mouse) => {
        return {
          ...mouse,
          startX: event.clientX - left,
          startY: event.clientY - top,
          down: true,
        };
      });
    }

    function onMouseMove(event: MouseEvent) {
      setMouse((mouse) => {
        if (!mouse.down) return mouse;
        return {
          ...mouse,
          x: (event.clientX - mouse.startX) / width,
          y: (event.clientY - mouse.startY) / height,
        };
      });
    }

    function onMouseUp() {
      setMouse((mouse) => {
        return { ...mouse, down: false };
      });
    }

    targetElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      targetElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [wrapper, img, width, height]);

  return mouse;
}
