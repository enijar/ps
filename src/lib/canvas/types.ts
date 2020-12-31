import React from "react";

export type Props = {
  src: string;
  width: number;
  height: number;
};

export type UiProps = {
  src: string;
  width: number;
  height: number;
  wrapper: React.MutableRefObject<HTMLDivElement | null>;
  img: React.MutableRefObject<HTMLImageElement | null>;
  position: Position;
};

export type Position = {
  x: number;
  y: number;
};

export type Pointer = {
  startX: number;
  startY: number;
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  down: boolean;
};

export type WrapperProps = {
  width: number;
  height: number;
};
