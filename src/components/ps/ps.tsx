import React from "react";
import { Canvas, Wrapper } from "./styles";
import { getPoints, getPosition } from "./utils";
import {
  Filters,
  Pointer,
  PointGroup,
  Position,
  Props,
  Settings,
  Size,
} from "./types";
import { IS_TOUCH } from "../../config/consts";

export default function Ps({ src }: Props) {
  const [blob, setBlob] = React.useState<string>("");
  const [pointGroups, setPointGroups] = React.useState<PointGroup[]>([]);
  const [pointGroupIndex, setPointGroupIndex] = React.useState<number>(-1);
  const [pointer, setPointer] = React.useState<Pointer>({
    down: false,
    x: 0,
    y: 0,
  });
  const svg = React.useRef<SVGSVGElement | null>(null);
  const [size, setSize] = React.useState<Size>({
    width: 0,
    height: 0,
    ratio: 1,
  });
  const settings = React.useMemo<Settings>(() => {
    return {
      lineCap: "round",
      p: 3 * size.ratio, // precision
    };
  }, [size]);
  const [rotation, setRotation] = React.useState<number>(0);
  const [draw, setDraw] = React.useState<boolean>(false);
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const [filters, setFilters] = React.useState<Filters>({
    blur: 0,
    saturation: 1,
    hue: 0,
    sepia: false,
  });
  const [color, setColor] = React.useState<string>("#000000");
  const [brushSize, setBrushSize] = React.useState<number>(10);
  const [scale, setScale] = React.useState<number>(1);
  const [opacity, setOpacity] = React.useState<number>(1);
  const transform = React.useMemo(() => {
    const cx = size.width / 2;
    const cy = size.height / 2;
    const s = scale;
    return [
      `translate(${position.x * size.width} ${position.y * size.height})`,
      `rotate(${rotation}, ${size.width / 2}, ${size.height / 2})`,
      `matrix(${s}, 0, 0, ${s}, ${cx - s * cx}, ${cy - s * cy})`,
    ].join(" ");
  }, [size, scale, position, rotation]);

  const download = React.useCallback(() => {
    const svgElement: SVGSVGElement | null = svg.current;
    if (svgElement === null) return;
    const canvas = document.createElement("canvas");
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (ctx === null) return;
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.toBlob((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "image.png";
        a.click();
      }, "image/png");
    };
    if (svg.current === null) return;
    svg.current.setAttribute("width", size.width.toString());
    svg.current.setAttribute("height", size.height.toString());
    const base64 = encodeURIComponent(svg.current.outerHTML);
    img.src = `data:image/svg+xml;utf8,${base64}`;
    svg.current.removeAttribute("width");
    svg.current.removeAttribute("height");
  }, [svg, size]);

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
      // @todo resize image to improve performance on large images
      if (ctx !== null) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        setBlob(canvas.toDataURL("image/png"));
      }
      setSize({
        width: img.width,
        height: img.height,
        ratio: img.width / img.height,
      });
    };
    img.src = src;
  }, [src]);

  React.useEffect(() => {
    const svgElement: SVGSVGElement | null = svg.current;

    if (svgElement === null) return;

    function onPointerDown(event: TouchEvent | MouseEvent) {
      const point = getPosition(event, svgElement);
      if (draw) {
        setPointGroupIndex((pointGroupIndex) => pointGroupIndex + 1);
        setPointGroups((pointGroups) => [
          ...pointGroups,
          { color, size: brushSize, points: [point, point] },
        ]);
      }
      setPosition((position) => ({
        ...position,
        startX: point.x,
        startY: point.y,
      }));
      setPointer((pointer) => ({ ...pointer, ...point, down: true }));
    }

    function onPointerMove(event: TouchEvent | MouseEvent) {
      event.preventDefault();
      const point = getPosition(event, svgElement);
      setPointer((pointer) => {
        if (!pointer.down) return pointer;
        return { ...pointer, ...point, down: true };
      });
    }

    function onPointerUp() {
      setPosition((position) => ({
        ...position,
        lastX: position.x,
        lastY: position.y,
      }));
      setPointer((pointer) => ({ ...pointer, down: false }));
    }

    const downType = IS_TOUCH ? "touchstart" : "pointerdown";
    const moveType = IS_TOUCH ? "touchmove" : "pointermove";
    const upType = IS_TOUCH ? "touchend" : "pointerup";

    svgElement.addEventListener(downType, onPointerDown, { passive: false });
    window.addEventListener(moveType, onPointerMove, { passive: false });
    window.addEventListener(upType, onPointerUp, { passive: false });
    return () => {
      svgElement.removeEventListener(downType, onPointerDown);
      window.removeEventListener(moveType, onPointerMove);
      window.removeEventListener(upType, onPointerUp);
    };
  }, [svg, draw, size, color, brushSize]);

  React.useEffect(() => {
    if (!pointer.down || !draw) return;
    setPointGroups((pointGroups) =>
      getPoints({
        pointGroups,
        pointGroupIndex,
        pointer,
        color,
        size,
        settings,
      })
    );
  }, [draw, pointer, pointGroupIndex, color, size, settings]);

  React.useEffect(() => {
    if (!pointer.down || draw) return;
    setPosition((position) => ({
      ...position,
      x: pointer.x - position.startX + position.lastX,
      y: pointer.y - position.startY + position.lastY,
    }));
  }, [pointer, draw]);

  return (
    <Wrapper>
      <Canvas>
        <svg
          ref={svg}
          viewBox={`0 0 ${size.width} ${size.height}`}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ maxWidth: `${size.width}px`, maxHeight: `${size.height}px` }}
        >
          <filter id="filters">
            {/* blur */}
            <feGaussianBlur stdDeviation={filters.blur} />
            {/* hur */}
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
        </svg>
      </Canvas>
      <div>
        <label>
          draw:
          <input
            type="checkbox"
            checked={draw}
            onChange={(e) => setDraw(e.target.checked)}
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
        <label>hue({filters.blur}&deg;):</label>
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
    </Wrapper>
  );
}
