import React from "react";
import { FiltersWrapper } from "./styles";
import { FilterTypes, PsContextType } from "../../config/types";
import { PsContext } from "../ps/context";

export default function Filters() {
  const {
    brushSize,
    setBrushSize,
    rotation,
    setRotation,
    selectedLayer,
    layers,
    setLayers,
  } = React.useContext(PsContext) as PsContextType;

  const applyFilter = React.useCallback(
    (type: FilterTypes) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedLayers = [...layers];
        const index = updatedLayers.findIndex(
          (layer) => layer.id === selectedLayer?.id
        );
        if (index === -1) return;
        switch (type) {
          case FilterTypes.sepia:
            updatedLayers[index].filters = {
              ...updatedLayers[index].filters,
              [FilterTypes.sepia]: event.target.checked,
            };
            break;
          case FilterTypes.saturation:
            updatedLayers[index].filters = {
              ...updatedLayers[index].filters,
              [FilterTypes.saturation]: parseFloat(event.target.value),
            };
            break;
          case FilterTypes.blur:
            updatedLayers[index].filters = {
              ...updatedLayers[index].filters,
              [FilterTypes.blur]: parseInt(event.target.value, 10),
            };
            break;
          case FilterTypes.hue:
            updatedLayers[index].filters = {
              ...updatedLayers[index].filters,
              [FilterTypes.hue]: parseInt(event.target.value, 10),
            };
            break;
          case FilterTypes.opacity:
            updatedLayers[index].filters[FilterTypes.opacity] = parseFloat(
              event.currentTarget.value
            );
            break;
        }
        setLayers(updatedLayers);
      };
    },
    [layers, selectedLayer, setLayers]
  );

  return (
    <FiltersWrapper>
      <div>
        <label>
          sepia:
          <input
            type="checkbox"
            checked={selectedLayer?.filters?.[FilterTypes.sepia] ?? false}
            onChange={applyFilter(FilterTypes.sepia)}
          />
        </label>
      </div>
      <div>
        <label>saturation:</label>
        <br />
        <input
          type="range"
          min={0}
          max={3}
          step={0.01}
          value={selectedLayer?.filters?.[FilterTypes.saturation] ?? ""}
          onChange={applyFilter(FilterTypes.saturation)}
        />
      </div>
      <div>
        <label>brushSize:</label>
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
        <label>rotation:</label>
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
        <label>blur({selectedLayer?.filters?.[FilterTypes.blur]}px):</label>
        <br />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={selectedLayer?.filters?.[FilterTypes.blur] ?? ""}
          onChange={applyFilter(FilterTypes.blur)}
        />
      </div>
      <div>
        <label>hue({selectedLayer?.filters?.[FilterTypes.hue]}&deg;):</label>
        <br />
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={selectedLayer?.filters?.[FilterTypes.hue] ?? ""}
          onChange={applyFilter(FilterTypes.hue)}
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
          value={selectedLayer?.filters?.[FilterTypes.opacity] ?? "0"}
          onChange={applyFilter(FilterTypes.opacity)}
        />
      </div>
    </FiltersWrapper>
  );
}