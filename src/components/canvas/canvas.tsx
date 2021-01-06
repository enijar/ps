import React from "react";
import { CanvasWrapper } from "./styles";
import { PsContextType, Tool } from "../../config/types";
import { PsContext } from "../ps/context";
import { getCursor } from "../../utils";

export default function Canvas() {
  const {
    size,
    filters,
    blob,
    transform,
    opacity,
    pointGroups,
    settings,
    tool,
    pointer,
    brushSize,
    color,
    svg,
  } = React.useContext(PsContext) as PsContextType;

  return (
    <CanvasWrapper style={{ cursor: getCursor(tool) }}>
      <svg
        ref={svg}
        viewBox={`0 0 ${size.width} ${size.height}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          maxWidth: `${size.width}px`,
          maxHeight: `${size.height}px`,
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

        <image
          xlinkHref={blob}
          filter="url(#filters)"
          transform={transform}
          opacity={opacity}
        />

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
