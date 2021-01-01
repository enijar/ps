import React from "react";
import { Wrapper } from "./styles";
import { Position, Props } from "./types";
import { ACTION_MOVE, ACTION_ZOOM, ZOOM_AMOUNT } from "../../config/consts";
import { TRANSPARENT_BACKGROUND } from "../../config/images";
import { getCursor } from "../../utils";
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

  React.useEffect(() => {
    if (!pointer.down || action !== ACTION_MOVE) return;
    setPosition({
      x: pointer.x,
      y: pointer.y,
    });
  }, [pointer, action]);

  // Zoom
  React.useEffect(() => {
    if (pointer.down && action === ACTION_ZOOM) {
      const dir = keys.includes("alt") ? -1 : 1;
      setZoom((zoom) => zoom + ZOOM_AMOUNT * dir);
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
        style={{
          left: `${position.x * width}px`,
          top: `${position.y * height}px`,
          transform: `scale(${zoom})`,
        }}
      />
    </Wrapper>
  );
}
