import React from "react";
import { SidebarWrapper } from "./styles";
import { PsContextType } from "../../config/types";
import { PsContext } from "../ps/context";
import Layers from "../layers/layers";

export default function Sidebar() {
  const {
    filters,
    setFilters,
    brushSize,
    setBrushSize,
    rotation,
    setRotation,
    opacity,
    setOpacity,
    download,
    reset,
  } = React.useContext(PsContext) as PsContextType;

  return (
    <SidebarWrapper>
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
      <Layers />
    </SidebarWrapper>
  );
}
