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

// const HIDDEN_STYLE = {
//   opacity: 0,
//
// };

export default function Toolbar() {
  const { tool, setTool, color, setColor } = React.useContext(
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
      <ToolButton onClick={toggleTool(Tool.move)} active={tool === Tool.move}>
        <img src={MOVE_ICON} alt="Move (v)" />
      </ToolButton>
      <ToolButton onClick={toggleTool(Tool.zoom)} active={tool === Tool.zoom}>
        <img src={ZOOM_ICON} alt="Zoom (z)" />
      </ToolButton>
      <ToolButton onClick={toggleTool(Tool.brush)} active={tool === Tool.brush}>
        <img src={BRUSH_ICON} alt="Brush (b)" />
      </ToolButton>
      <ToolButton inactive>
        <img src={COLOR_ICON(color)} alt="Color" />
        <input
          ref={colorInput}
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
      </ToolButton>
    </ToolbarWrapper>
  );
}
