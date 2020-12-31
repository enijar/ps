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

export type WrapperProps = {
  width: number;
  height: number;
};
