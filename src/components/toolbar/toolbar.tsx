import React from "react";
import { ToolbarWrapper, ToolButton } from "./styles";
import {
  BRUSH_ICON,
  COLOR_ICON,
  MOVE_ICON,
  ZOOM_ICON,
} from "../../config/images";
import { PsContextType, Tool } from "../../config/types";
import { PsContext } from "../ps/context";
import { DEFAULTS } from "../../config/consts";

export default function Toolbar() {
  const { tool, setTool, setColor } = React.useContext(
    PsContext
  ) as PsContextType;
  const colorInput = React.useRef<HTMLInputElement | null>(null);

  const toggleTool = React.useCallback(
    (tool: Tool) => {
      return () => {
        setTool((currentTool) => {
          if (currentTool === tool) return DEFAULTS.tool;
          return tool;
        });
      };
    },
    [setTool]
  );

  return (
    <ToolbarWrapper>
      <ToolButton
        onClick={toggleTool(Tool.move)}
        active={tool === Tool.move}
        title="Move (v)"
      >
        <img src={MOVE_ICON} alt="" />
      </ToolButton>
      <ToolButton
        onClick={toggleTool(Tool.zoom)}
        active={tool === Tool.zoom}
        title="Zoom (z)"
      >
        <img src={ZOOM_ICON} alt="" />
      </ToolButton>
      <ToolButton
        onClick={toggleTool(Tool.brush)}
        active={tool === Tool.brush}
        title="Brush (b)"
      >
        <img src={BRUSH_ICON} alt="" />
      </ToolButton>
      <ToolButton inactive title="Color">
        <img src={COLOR_ICON} alt="" />
        <input
          ref={colorInput}
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
      </ToolButton>
    </ToolbarWrapper>
  );
}
