import React from "react";
import { LayerItem, LayersWrapper } from "./styles";
import { Layer, OrderType, PsContextType } from "../../config/types";
import { EYE_ICON } from "../../config/images";
import { sortLayers } from "../../utils";
import { PsContext } from "../ps/context";

type DragData = {
  layer: Layer;
  enabled: boolean;
  startY: number;
  offsetY: number;
  // @todo fix type
  target: any;
};

export default function Layers() {
  const {
    layers,
    setLayers,
    selectedLayer,
    setSelectedLayer,
  } = React.useContext(PsContext) as PsContextType;
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const [renameLayer, setRenameLayer] = React.useState<Layer | null>(null);
  const [layerName, setLayerName] = React.useState<string>("");
  const [dragData, setDragData] = React.useState<DragData | null>(null);

  const selectLayer = React.useCallback(
    (layer) => {
      return () => setSelectedLayer(layer);
    },
    [setSelectedLayer]
  );

  const toggleVisibility = React.useCallback(
    (layer) => {
      return () => {
        const updatedLayers = [...layers];
        const index = updatedLayers.findIndex((item) => item.id === layer.id);
        if (index === -1) return;
        updatedLayers[index].visible = !updatedLayers[index].visible;
        setLayers(updatedLayers);
      };
    },
    [layers, setLayers]
  );

  const onDoubleClick = React.useCallback((layer: Layer) => {
    return () => {
      setLayerName(layer.name);
      setRenameLayer(layer);
    };
  }, []);

  const onKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key.toLowerCase() === "escape") {
      setRenameLayer(null);
    }
  }, []);

  // @todo fix event type
  const onFocus = React.useCallback((event: any) => {
    event.target.select();
  }, []);

  const onBlur = React.useCallback(() => {
    setRenameLayer(null);
  }, []);

  const onChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setLayerName(event.currentTarget.value);
    },
    []
  );

  const onSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (renameLayer === null) return;
      const updatedLayers = [...layers];
      const index = updatedLayers.findIndex(
        (item) => item.id === renameLayer.id
      );
      if (index === -1) return;
      updatedLayers[index].name = layerName;
      setLayers(updatedLayers);
      setRenameLayer(null);
    },
    [layers, setLayers, renameLayer, layerName]
  );

  const onPointerDown = React.useCallback(
    (layer) => {
      // @todo fix event type
      return (event: any) => {
        if (wrapper.current === null) return;
        const { top } = wrapper.current.getBoundingClientRect();
        setDragData({
          layer,
          enabled: true,
          startY: wrapper.current.scrollTop + top,
          offsetY: 0,
          target: event.target,
        });
      };
    },
    [wrapper]
  );

  React.useEffect(() => {
    function onPointerUp() {
      setDragData(null);
    }
    function onPointerMove(event: PointerEvent) {
      if (!wrapper.current || !dragData || !dragData.enabled) return;
      const { height } = dragData.target.getBoundingClientRect();
      console.log(
        height,
        dragData.layer.order,
        layers[layers.length - 1].order
      );
      const y = event.pageY - wrapper.current.scrollTop;
      setDragData((dragData) => {
        if (!dragData) return null;
        return {
          ...dragData,
          offsetY: y - dragData.startY,
        };
      });
    }
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [dragData, wrapper, layers]);

  return (
    <LayersWrapper ref={wrapper}>
      {sortLayers(layers, OrderType.desc).map((layer) => {
        return (
          <LayerItem
            key={layer.id}
            title={layer.name}
            selected={selectedLayer?.id === layer.id}
            onClick={selectLayer(layer)}
            onPointerDown={onPointerDown(layer)}
            style={{
              transform:
                dragData?.layer?.id === layer.id
                  ? `translateY(${dragData?.offsetY ?? 0}px)`
                  : undefined,
            }}
          >
            <img
              src={EYE_ICON}
              alt=""
              title="Toggle layer visibility"
              onClick={toggleVisibility(layer)}
              style={{ opacity: layer.visible ? 1 : 0 }}
            />
            <div onDoubleClick={onDoubleClick(layer)}>
              {renameLayer?.id !== layer.id && <label>{layer.name}</label>}
              {renameLayer?.id === layer.id && (
                <form onSubmit={onSubmit}>
                  <input
                    autoFocus
                    value={layerName}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                  />
                </form>
              )}
            </div>
          </LayerItem>
        );
      })}
    </LayersWrapper>
  );
}
