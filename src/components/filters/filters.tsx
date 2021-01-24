import React from "react";
import { FiltersWrapper } from "./styles";
import { PsContext } from "../ps/context";
import { PsContextType } from "../../config/types";

export default function Filters() {
  const {
    filters,
    setFilters,
    brushSize,
    setBrushSize,
    rotation,
    setRotation,
    selectedLayer,
    layers,
    setLayers,
  } = React.useContext(PsContext) as PsContextType;

  return (
    <FiltersWrapper>
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
        <label>opacity:</label>
        <br />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={selectedLayer?.opacity ?? 0}
          onChange={(e) => {
            const updatedLayers = [...layers];
            const index = updatedLayers.findIndex(
              (layer) => layer.id === selectedLayer?.id
            );
            if (index === -1) return;
            updatedLayers[index].opacity = parseFloat(e.target.value);
            setLayers(updatedLayers);
          }}
        />
      </div>
    </FiltersWrapper>
  );
}
