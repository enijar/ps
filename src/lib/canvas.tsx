import React from "react";
import styled, { css } from "styled-components";
import { TRANSPARENT_BACKGROUND } from "./images";
import useMouse from "./hooks/use-mouse";

type Props = {
  src: string;
  width: number;
  height: number;
};

type Position = {
  x: number;
  y: number;
  normal: {
    x: number;
    y: number;
  };
};

type WrapperProps = {
  width: number;
  height: number;
};

const Wrapper = styled.div<WrapperProps>`
  background-repeat: repeat;
  overflow: hidden;
  position: relative;
  user-select: none;

  ${(props) => css`
    img {
      max-width: ${props.width}px;
      max-height: ${props.height}px;
    }
  `}
`;

export default function Canvas({ src, width = 640, height = 480 }: Props) {
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const img = React.useRef<HTMLImageElement | null>(null);
  const [action] = React.useState("move");
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
    normal: { x: 0, y: 0 },
  });
  const mouse = useMouse(wrapper, img, width, height);

  const onDragStart = React.useCallback(
    (event: React.DragEvent<HTMLImageElement>) => {
      event.preventDefault();
    },
    []
  );

  const onContextMenu = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    },
    []
  );

  React.useEffect(() => {
    if (!mouse.down || action !== "move") return;
    setPosition({
      x: mouse.x * width,
      y: mouse.y * height,
      normal: {
        x: mouse.x,
        y: mouse.y,
      },
    });
  }, [mouse, action, width, height]);

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
