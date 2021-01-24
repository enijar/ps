import React from "react";
import { LayerItem, LayersWrapper } from "./styles";
import { OrderType, PsContextType } from "../../config/types";
import { EYE_ICON } from "../../config/images";
import { sortLayers } from "../../utils";
import { PsContext } from "../ps/context";
import emitter from "../../services/emitter";

export default function Layers() {
  const { layers, selectedLayer, setSelectedLayer } = React.useContext(
    PsContext
  ) as PsContextType;

  const selectLayer = React.useCallback(
    (layer) => {
      return () => {
        setSelectedLayer(layer);
      };
    },
    [setSelectedLayer]
  );

  const toggleVisibility = React.useCallback((layer) => {
    return () => {
      emitter.emit("layer.visibility", layer);
    };
  }, []);

  return (
    <LayersWrapper>
      {sortLayers(layers, OrderType.desc).map((layer) => {
        return (
          <LayerItem
            key={layer.id}
            title={layer.name}
            selected={selectedLayer?.id === layer.id}
            onClick={selectLayer(layer)}
          >
            <img
              src={EYE_ICON}
              alt=""
              title="Toggle layer visibility"
              onClick={toggleVisibility(layer)}
              style={{ opacity: layer.visible ? 1 : 0 }}
            />
            <div>
              <label>{layer.name}</label>
            </div>
          </LayerItem>
        );
      })}
    </LayersWrapper>
  );
}