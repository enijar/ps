export type Props = {
  src: string;
};

export type Point = {
  x: number;
  y: number;
};

export type PointGroup = {
  color: string;
  size: number;
  points: Point[];
};

export type Pointer = {
  down: boolean;
  x: number;
  y: number;
};

export type Settings = {
  lineCap: "round";
  p: number;
};

export type Position = {
  x: number;
  y: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
};

export type Filters = {
  blur: number;
  saturation: number;
  hue: number;
  sepia: boolean;
};

export type Size = {
  width: number;
  height: number;
  ratio: number;
};

export type GetPointsProps = {
  pointGroups: PointGroup[];
  pointGroupIndex: number;
  pointer: Pointer;
  color: string;
  brushSize?: number;
  size: {
    width: number;
    height: number;
  };
  settings: Settings;
};
