import { Wrapper } from "./styles";
import { TRANSPARENT_BACKGROUND } from "../config/images";
import React from "react";
import { UiProps } from "./types";
import useOnContext from "../hooks/use-on-context";
import useOnDrag from "../hooks/use-on-drag";

export default function Ui({
  src,
  width,
  height,
  wrapper,
  img,
  position,
}: UiProps) {
  const onContextMenu = useOnContext();
  const onDragStart = useOnDrag();

  return (
    <Wrapper
      width={width}
      height={height}
      ref={wrapper}
      style={{
        backgroundImage: `url("${TRANSPARENT_BACKGROUND}")`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      onContextMenu={onContextMenu}
    >
      <img
        src={src}
        alt=""
        onDragStart={onDragStart}
        ref={img}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </Wrapper>
  );
}
