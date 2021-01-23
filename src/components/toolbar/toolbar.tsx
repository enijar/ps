import React from "react";
import { ToolbarWrapper, ToolButton } from "./styles";
import {
  BRUSH_ICON,
  COLOR_ICON,
  CROP_ICON,
  MOVE_ICON,
  ZOOM_ICON,
} from "../../config/images";
import { PsContextType, Tool, ToolHotKey } from "../../config/types";
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
        title={`Move (${ToolHotKey.move})`}
      >
        <img src={MOVE_ICON} alt="" />
      </ToolButton>
      <ToolButton
        onClick={toggleTool(Tool.zoom)}
        active={tool === Tool.zoom}
        title={`Zoom (${ToolHotKey.zoom})`}
      >
        <img src={ZOOM_ICON} alt="" />
      </ToolButton>
      <ToolButton
        onClick={toggleTool(Tool.brush)}
        active={tool === Tool.brush}
        title={`Brush (${ToolHotKey.brush})`}
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
      <ToolButton
        onClick={toggleTool(Tool.crop)}
        active={tool === Tool.crop}
        title={`Crop (${ToolHotKey.crop})`}
      >
        <img src={CROP_ICON} alt="" />
      </ToolButton>
    </ToolbarWrapper>
  );
}
