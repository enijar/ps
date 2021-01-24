import React from "react";
import {
  Layer,
  Pointer,
  PressedKeys,
  PsContextType,
  Settings,
  Size,
  Tool,
  ToolHotKey,
} from "../../config/types";
import { DEFAULTS, ZOOM_DELTA } from "../../config/consts";
import { getPoints, getPosition } from "../../utils";

type Props = {
  children: any;
};

export const PsContext = React.createContext({});

export default function PsContextProvider({ children }: Props) {
  const [pointer, setPointer] = React.useState<Pointer>({
    down: false,
    x: 0,
    y: 0,
  });
  const [size, setSize] = React.useState<Size>({
    width: 0,
    height: 0,
    ratio: 1,
  });
  const [tool, setTool] = React.useState<Tool>(Tool.move);
  const [color, setColor] = React.useState<string>(DEFAULTS.color);
  const [scale, setScale] = React.useState<number>(DEFAULTS.scale);
  const [brushSize, setBrushSize] = React.useState<number>(DEFAULTS.brushSize);
  const [layers, setLayers] = React.useState<Layer[]>(DEFAULTS.layers);
  const [selectedLayer, setSelectedLayer] = React.useState<Layer | null>(
    DEFAULTS.selectedLayer
  );
  const [pressedKeys, setPressedKeys] = React.useState<PressedKeys>(
    DEFAULTS.pressedKeys
  );
  const settings = React.useMemo<Settings>(() => {
    return {
      lineCap: "round",
      p: 3 * size.ratio, // precision
    };
  }, [size]);
  const svg = React.useRef<SVGSVGElement | null>(null);

  const reset = React.useCallback(() => {
    setScale(DEFAULTS.scale);
    setColor(DEFAULTS.color);
    setBrushSize(DEFAULTS.brushSize);
    setTool(DEFAULTS.tool);
    setPressedKeys(DEFAULTS.pressedKeys);
    setLayers(DEFAULTS.layers);
    setSelectedLayer(DEFAULTS.selectedLayer);
  }, []);

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
  }, [size, svg]);

  React.useEffect(() => {
    const svgElement: SVGSVGElement | null = svg.current;

    if (svgElement === null) return;

    function onPointerDown(event: TouchEvent | PointerEvent) {
      const point = getPosition(event, svgElement);
      if (selectedLayer !== null) {
        setLayers((layers) => {
          return layers.map((layer) => {
            if (!layer.visible) return layer;
            if (layer.id === selectedLayer.id) {
              if (tool === Tool.brush) {
                const pX = point.x - layer.position.x;
                const pY = point.y - layer.position.y;
                layer.pointGroupIndex = layer.pointGroupIndex + 1;
                layer.pointGroups = [
                  ...layer.pointGroups,
                  {
                    color,
                    size: brushSize,
                    rotation: 0,
                    points: [
                      { x: pX, y: pY },
                      { x: pX, y: pY },
                    ],
                  },
                ];
              }
              layer.position = {
                ...layer.position,
                startX: point.x,
                startY: point.y,
              };
            }
            return layer;
          });
        });
      }
      setPointer((pointer) => ({ ...pointer, ...point, down: true }));
    }

    function onPointerMove(event: TouchEvent | PointerEvent) {
      event.preventDefault();
      const point = getPosition(event, svgElement);
      setPointer((pointer) => ({ ...pointer, ...point }));
    }

    function onPointerUp() {
      if (selectedLayer !== null) {
        setLayers((layers) => {
          return layers.map((layer) => {
            if (!layer.visible) return layer;
            if (layer.id === selectedLayer.id) {
              layer.position = {
                ...layer.position,
                lastX: layer.position.x,
                lastY: layer.position.y,
              };
            }
            return layer;
          });
        });
      }
      setPointer((pointer) => ({ ...pointer, down: false }));
    }

    svgElement.addEventListener("pointerdown", onPointerDown, {
      passive: true,
    });
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp, { passive: false });
    svgElement.addEventListener("touchstart", onPointerDown, {
      passive: false,
    });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp, { passive: false });
    return () => {
      svgElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      svgElement.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, [
    svg,
    tool,
    size,
    color,
    brushSize,
    setPointer,
    selectedLayer,
    setLayers,
    pointer,
  ]);

  React.useEffect(() => {
    if (!pointer.down || tool !== Tool.brush) return;
    setLayers((layers) => {
      return layers.map((layer) => {
        layer.pointGroups = getPoints({
          layer,
          pointer,
          color,
          size,
          settings,
        });
        return layer;
      });
    });
  }, [tool, pointer, color, size, settings]);

  React.useEffect(() => {
    if (!pointer.down || tool !== Tool.move || selectedLayer === null) return;
    setLayers((layers) => {
      return layers.map((layer) => {
        if (!layer.visible) return layer;
        if (layer.id === selectedLayer.id) {
          layer.position = {
            ...layer.position,
            x: pointer.x - layer.position.startX + layer.position.lastX,
            y: pointer.y - layer.position.startY + layer.position.lastY,
          };
        }
        return layer;
      });
    });
  }, [pointer, tool, selectedLayer]);

  React.useEffect(() => {
    if (pressedKeys.includes(ToolHotKey.move)) {
      setTool(Tool.move);
    }
    if (pressedKeys.includes(ToolHotKey.brush)) {
      setTool(Tool.brush);
    }
    if (pressedKeys.includes(ToolHotKey.zoom)) {
      setTool(Tool.zoom);
    }
    if (pressedKeys.includes(ToolHotKey.crop)) {
      setTool(Tool.crop);
    }
  }, [pressedKeys]);

  React.useEffect(() => {
    if (pointer.down && tool === Tool.zoom) {
      const direction = pressedKeys.includes(ToolHotKey.zoomOut) ? -1 : 1;
      setScale((scale) => scale + ZOOM_DELTA * direction);
    }
  }, [pressedKeys, tool, pointer.down]);

  React.useEffect(() => {
    function getKey(event: KeyboardEvent): string {
      return event.key.toLowerCase();
    }

    function onKeyDown(event: KeyboardEvent) {
      const key = getKey(event);
      setPressedKeys((pressedKeys) => {
        if (pressedKeys.includes(key)) return pressedKeys;
        return [...pressedKeys, key];
      });
    }

    function onKeyUp(event: KeyboardEvent) {
      const key = getKey(event);
      setPressedKeys((pressedKeys) => {
        const index = pressedKeys.indexOf(key);
        if (index === -1) return pressedKeys;
        pressedKeys.splice(index, 1);
        return [...pressedKeys];
      });
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  const context: PsContextType = {
    layers,
    setLayers,
    selectedLayer,
    setSelectedLayer,
    pointer,
    setPointer,
    size,
    setSize,
    tool,
    setTool,
    color,
    setColor,
    brushSize,
    setBrushSize,
    pressedKeys,
    setPressedKeys,
    settings,
    svg,
    reset,
    download,
    scale,
    setScale,
  };

  return <PsContext.Provider value={context}>{children}</PsContext.Provider>;
}
