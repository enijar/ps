import React from "react";
import { Position, Props } from "./types";
import { ActionType } from "../../types";
import { ACTION_MOVE } from "../../consts";
import usePointer from "../hooks/use-pointer";
import emitter from "../services/emitter";
import Ui from "./ui";

export default function Canvas({ src, width = 640, height = 480 }: Props) {
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const img = React.useRef<HTMLImageElement | null>(null);
  const [action, setAction] = React.useState<ActionType>(null);
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });
  const pointer = usePointer(wrapper, img);

  React.useEffect(() => {
    if (!pointer.down || action !== ACTION_MOVE) return;
    setPosition({
      x: pointer.x,
      y: pointer.y,
    });
  }, [pointer, action]);

  React.useEffect(() => {
    return emitter.subscribe("action", setAction);
  }, []);

  return (
    <Ui
      src={src}
      width={width}
      height={height}
      wrapper={wrapper}
      img={img}
      position={position}
    />
  );
}
