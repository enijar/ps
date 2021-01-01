import React from "react";
import { Wrapper } from "./styles";
import { Props } from "./types";
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
  const {
    action,
    keys,
    opacity,
    rotation,
    position,
    setPosition,
    flipX,
    flipY,
    grayscale,
    contrast,
    zoom,
    setZoom,
  } = React.useContext(PsContext) as PsContextType;
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const img = React.useRef<HTMLImageElement | null>(null);
  const pointer = usePointer(wrapper, img);
  const onContextMenu = useOnContext();
  const onDragStart = useOnDrag();
  const cursor = React.useMemo(() => {
    return getCursor(action, keys);
  }, [action, keys]);
  const { transform, filter } = React.useMemo(() => {
    const translateX = position.x * width;
    const translateY = position.y * height;
    return {
      filter: `grayscale(${grayscale * 100}%) contrast(${contrast})`,
      transform: `translate(${translateX}px, ${translateY}px) scale(${zoom}) rotate(${rotation}deg) scaleX(${flipX}) scaleY(${flipY})`,
    };
  }, [
    position,
    width,
    height,
    zoom,
    rotation,
    flipX,
    flipY,
    grayscale,
    contrast,
  ]);

  React.useEffect(() => {
    if (!pointer.down || action !== ACTION_MOVE) return;
    setPosition({
      x: clamp(pointer.x, -0.5, 1.5),
      y: clamp(pointer.y, -0.5, 1.5),
    });
  }, [pointer, action, setPosition]);

  // Zoom
  React.useEffect(() => {
    if (pointer.down && action === ACTION_ZOOM) {
      const dir = keys.includes("alt") ? -1 : 1;
      setZoom((zoom) => {
        return clamp(zoom + ZOOM_AMOUNT * dir, ZOOM_MIN, ZOOM_MAX);
      });
    }
  }, [pointer, action, keys, setZoom]);

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
        style={{ transform, filter, opacity }}
      />
    </Wrapper>
  );
}
