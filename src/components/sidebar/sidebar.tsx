import React from "react";
import { SidebarWrapper } from "./styles";
import { PsContextType, Tool } from "../../config/types";
import { PsContext } from "../ps/context";

export default function Sidebar() {
  const {
    tool,
    setTool,
    filters,
    setFilters,
    color,
    setColor,
    brushSize,
    setBrushSize,
    rotation,
    setRotation,
    scale,
    setScale,
    opacity,
    setOpacity,
    download,
    reset,
  } = React.useContext(PsContext) as PsContextType;

  return (
    <SidebarWrapper>
      <div>
        <label>
          draw:
          <input
            type="checkbox"
            checked={tool === Tool.brush}
            onChange={(e) => setTool(e.target.checked ? Tool.brush : Tool.move)}
          />
        </label>
      </div>
      <div>
        <label>
          sepia:
          <input
            type="checkbox"
            checked={filters.sepia}
            onChange={(e) =>
              setFilters((filters) => ({
                ...filters,
                sepia: e.target.checked,
              }))
            }
          />
        </label>
      </div>
      <div>
        <label>color({color}):</label>
        <br />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label>saturation({filters.saturation}):</label>
        <br />
        <input
          type="range"
          min={0}
          max={3}
          step={0.01}
          value={filters.saturation}
          onChange={(e) =>
            setFilters((filters) => ({
              ...filters,
              saturation: parseFloat(e.target.value),
            }))
          }
        />
      </div>
      <div>
        <label>brushSize({brushSize}px):</label>
        <br />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={brushSize}
          onChange={(e) => setBrushSize(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label>rotation({rotation}&deg;):</label>
        <br />
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={rotation}
          onChange={(e) => setRotation(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label>blur({filters.blur}px):</label>
        <br />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={filters.blur}
          onChange={(e) =>
            setFilters((filters) => ({
              ...filters,
              blur: parseInt(e.target.value, 10),
            }))
          }
        />
      </div>
      <div>
        <label>hue({filters.hue}&deg;):</label>
        <br />
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={filters.hue}
          onChange={(e) =>
            setFilters((filters) => ({
              ...filters,
              hue: parseInt(e.target.value, 10),
            }))
          }
        />
      </div>
      <div>
        <label>scale({scale}):</label>
        <br />
        <input
          type="range"
          min={0.1}
          max={2}
          step={0.01}
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>opacity({opacity}):</label>
        <br />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <button onClick={download}>download</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
    </SidebarWrapper>
  );
}
