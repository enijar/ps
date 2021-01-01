import React from "react";
import { ActionType, Position } from "../config/types";
import { DEFAULTS } from "../config/consts";

type Props = {
  children: any;
};

export type PsContextType = {
  action: ActionType;
  setAction: React.Dispatch<React.SetStateAction<ActionType>>;
  keys: string[];
  opacity: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  flipX: number;
  setFlipX: React.Dispatch<React.SetStateAction<number>>;
  flipY: number;
  setFlipY: React.Dispatch<React.SetStateAction<number>>;
  grayscale: number;
  setGrayscale: React.Dispatch<React.SetStateAction<number>>;
  contrast: number;
  setContrast: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  reset: React.RefCallback<any>;
};

export const PsContext = React.createContext({});

export default function PsContextProvider({ children }: Props) {
  const [action, setAction] = React.useState<ActionType>(null);
  const [keys, setKeys] = React.useState<string[]>([]);
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState<number>(1);
  const [rotation, setRotation] = React.useState<number>(0);
  const [zoom, setZoom] = React.useState<number>(1);
  const [flipX, setFlipX] = React.useState<number>(1);
  const [flipY, setFlipY] = React.useState<number>(1);
  const [grayscale, setGrayscale] = React.useState<number>(0);
  const [contrast, setContrast] = React.useState<number>(1);

  const reset = React.useCallback(() => {
    setPosition(DEFAULTS.position);
    setOpacity(DEFAULTS.opacity);
    setRotation(DEFAULTS.rotation);
    setZoom(DEFAULTS.zoom);
    setFlipX(DEFAULTS.flipX);
    setFlipY(DEFAULTS.flipY);
    setGrayscale(DEFAULTS.grayscale);
    setContrast(DEFAULTS.contrast);
  }, []);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      setKeys((keys: string[]) => {
        if (!keys.includes(key)) return [...keys, key];
        return keys;
      });
    }

    function onKeyUp(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      setKeys((keys: string[]) => {
        const index = keys.indexOf(key);
        if (index > -1) keys.splice(index, 1);
        return [...keys];
      });
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <PsContext.Provider
      value={{
        action,
        setAction,
        keys,
        opacity,
        setOpacity,
        rotation,
        setRotation,
        position,
        setPosition,
        flipX,
        setFlipX,
        flipY,
        setFlipY,
        grayscale,
        setGrayscale,
        contrast,
        setContrast,
        zoom,
        setZoom,
        reset,
      }}
    >
      {children}
    </PsContext.Provider>
  );
}
