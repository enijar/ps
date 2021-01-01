import React from "react";
import { Wrapper } from "./styles";
import { Position, Props } from "./types";
import {
  ACTION_MOVE,
  ACTION_ZOOM,
  ZOOM_AMOUNT,
  ZOOM_MAX,
  ZOOM_MIN,
} from "../../config/consts";
import { TRANSPARENT_BACKGROUND } from "../../config/images";
import { clamp, getCursor } from "../../utils";
import { PsContext, PsContextType } from "../../context/ps";
import usePointer from "../../hooks/use-pointer";
import useOnContext from "../../hooks/use-on-context";
import useOnDrag from "../../hooks/use-on-drag";

export default function Canvas({ src, width = 640, height = 480 }: Props) {
  const { action, keys } = React.useContext(PsContext) as PsContextType;
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const img = React.useRef<HTMLImageElement | null>(null);
  const pointer = usePointer(wrapper, img);
  const onContextMenu = useOnContext();
  const onDragStart = useOnDrag();
  const cursor = React.useMemo(() => {
    if (action === ACTION_ZOOM && keys.includes("alt")) {
      return "zoom-out";
    }
    return getCursor(action);
  }, [action, keys]);
  // Effected state
  // @todo merge these into one object
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = React.useState<number>(1);
  const { transform } = React.useMemo(() => {
    const translateX = position.x * width;
    const translateY = position.y * height;
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${zoom})`,
    };
  }, [position, width, height, zoom]);

  React.useEffect(() => {
    if (!pointer.down || action !== ACTION_MOVE) return;
    setPosition({
      x: clamp(pointer.x, -0.5, 1.5),
      y: clamp(pointer.y, -0.5, 1.5),
    });
  }, [pointer, action]);

  // Zoom
  React.useEffect(() => {
    if (pointer.down && action === ACTION_ZOOM) {
      const dir = keys.includes("alt") ? -1 : 1;
      setZoom((zoom) => {
        return clamp(zoom + ZOOM_AMOUNT * dir, ZOOM_MIN, ZOOM_MAX);
      });
    }
  }, [pointer, action, keys]);

  return (
    <Wrapper
      width={width}
      height={height}
      ref={wrapper}
      style={{
        backgroundImage: `url("${TRANSPARENT_BACKGROUND}")`,
        width: `${width}px`,
        height: `${height}px`,
        cursor,
      }}
      onContextMenu={onContextMenu}
    >
      <img
        src={src}
        alt=""
        onDragStart={onDragStart}
        ref={img}
        style={{ transform }}
      />
    </Wrapper>
  );
}
