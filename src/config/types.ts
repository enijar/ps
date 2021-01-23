import React from "react";

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

export enum Tool {
  move,
  brush,
  zoom,
  crop,
}

export enum ToolHotKey {
  move = "v",
  brush = "b",
  zoom = "z",
  zoomOut = "alt",
  crop = "c",
}

export type PressedKeys = string[];

export type PsContextType = {
  blob: string;
  setBlob: React.Dispatch<React.SetStateAction<string>>;
  pointGroups: PointGroup[];
  setPointGroups: React.Dispatch<React.SetStateAction<PointGroup[]>>;
  pointGroupIndex: number;
  setPointGroupIndex: React.Dispatch<React.SetStateAction<number>>;
  pointer: Pointer;
  setPointer: React.Dispatch<React.SetStateAction<Pointer>>;
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  tool: Tool;
  setTool: React.Dispatch<React.SetStateAction<Tool>>;
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  brushSize: number;
  setBrushSize: React.Dispatch<React.SetStateAction<number>>;
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  opacity: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
  pressedKeys: PressedKeys;
  setPressedKeys: React.Dispatch<React.SetStateAction<PressedKeys>>;
  transform: string;
  settings: Settings;
  svg: React.MutableRefObject<SVGSVGElement | null>;
  reset: React.MouseEventHandler;
  download: React.MouseEventHandler;
};
