import React from "react";
import { CanvasWrapper, CanvasHelper } from "./styles";
import { Layer, PsContextType, Tool } from "../../config/types";
import { PsContext } from "../ps/context";
import {
  getCursor,
  createLayer,
  createTransform,
  sortLayers,
} from "../../utils";

export default function Canvas() {
  const {
    size,
    scale,
    setSize,
    setSelectedLayer,
    filters,
    layers,
    setLayers,
    pointGroups,
    settings,
    tool,
    pointer,
    brushSize,
    color,
    svg,
    pressedKeys,
  } = React.useContext(PsContext) as PsContextType;

  const onDragOver = React.useCallback((event: React.DragEvent<any>) => {
    event.stopPropagation();
    event.preventDefault();
  }, []);

  const onDrop = React.useCallback(
    async (event: React.DragEvent<any>) => {
      event.stopPropagation();
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files);
      const nextOrder = Math.max(
        Math.max(...layers.map((layer) => layer.order)) + 1,
        0
      );
      // @todo handle errors
      const newLayers: Layer[] = await Promise.all(
        files.map((file, index) => createLayer(file, nextOrder + index))
      );
      setLayers(layers.concat(newLayers));
      setSelectedLayer(newLayers[newLayers.length - 1]);
    },
    [layers, setLayers, setSelectedLayer]
  );

  React.useEffect(() => {
    if (layers.length > 0 && size.width + size.height === 0) {
      setSize({
        width: layers[0].image.width,
        height: layers[0].image.height,
        ratio: layers[0].image.ratio,
      });
      setSelectedLayer(layers[0]);
    }
  }, [layers, size, setSize, setSelectedLayer]);

  return (
    <CanvasWrapper
      style={{ cursor: getCursor(tool, pressedKeys) }}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <CanvasHelper style={{ display: layers.length > 0 ? "none" : undefined }}>
        Drop images here to get started!
      </CanvasHelper>
      <svg
        ref={svg}
        viewBox={`0 0 ${size.width} ${size.height}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          maxWidth: `${size.width}px`,
          maxHeight: `${size.height}px`,
          display: layers.length === 0 ? "none" : undefined,
        }}
      >
        <filter id="filters">
          {/* blur */}
          <feGaussianBlur stdDeviation={filters.blur} />
          {/* hue */}
          <feColorMatrix type="hueRotate" values={filters.hue.toString()} />
          {/* saturation */}
          <feColorMatrix
            type="saturate"
            values={filters.saturation.toString()}
          />
          {/* sepia */}
          {filters.sepia && (
            <feColorMatrix
              type="matrix"
              values="0.39 0.769 0.189 0 0 0.349 0.686 0.168 0 0 0.272 0.534 0.131 0 0 0 0 0 1 0"
            />
          )}
        </filter>

        <g filter="url(#filters)" style={{ transform: `scale(${scale})` }}>
          {sortLayers(layers).map((layer, index) => {
            if (!layer.visible) return null;
            return (
              <image
                onDragStart={(event) => event.preventDefault()}
                key={index}
                href={layer.image.src}
                transform={createTransform(size, layer)}
                opacity={layer.opacity}
              />
            );
          })}
        </g>

        {pointGroups.map((pointGroup, index) => {
          return (
            <path
              key={index}
              stroke={pointGroup.color}
              fill="none"
              d={`M${pointGroup.points
                .map((p) => [p.x * size.width, p.y * size.height].join(","))
                .join(",")}`}
              strokeWidth={pointGroup.size}
              strokeLinecap={settings.lineCap}
              strokeLinejoin="round"
            />
          );
        })}
        {tool === Tool.brush && (
          <circle
            cx={(pointer.x * size.width).toString()}
            cy={(pointer.y * size.height).toString()}
            r={brushSize / 2}
            fill={color}
            strokeMiterlimit="10"
          />
        )}
      </svg>
    </CanvasWrapper>
  );
}
