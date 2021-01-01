import React from "react";
import { InputWrapper, Wrapper } from "./styles";
import { PsContext, PsContextType } from "../../context/ps";
import {
  GREYSCALE_AMOUNT,
  GREYSCALE_MAX,
  GREYSCALE_MIN,
  OPACITY_AMOUNT,
  OPACITY_MAX,
  OPACITY_MIN,
  ROTATION_AMOUNT,
  ROTATION_MAX,
  ROTATION_MIN,
} from "../../config/consts";

export default function Sidebar() {
  const {
    opacity,
    setOpacity,
    rotation,
    setRotation,
    setFlipX,
    setFlipY,
    grayscale,
    setGrayscale,
  } = React.useContext(PsContext) as PsContextType;

  const onOpacityChange = React.useCallback<React.ChangeEventHandler>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOpacity(parseFloat(event.target.value));
    },
    [setOpacity]
  );

  const onRotationChange = React.useCallback<React.ChangeEventHandler>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRotation(parseFloat(event.target.value));
    },
    [setRotation]
  );

  const onGreyscaleChange = React.useCallback<React.ChangeEventHandler>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setGrayscale(parseFloat(event.target.value));
    },
    [setGrayscale]
  );

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="sidebar-opacity">Opacity:</label>
        <input
          id="sidebar-opacity"
          type="range"
          min={OPACITY_MIN}
          max={OPACITY_MAX}
          step={OPACITY_AMOUNT}
          onChange={onOpacityChange}
          value={opacity}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="sidebar-rotation">Rotation:</label>
        <input
          id="sidebar-opacity"
          type="range"
          min={ROTATION_MIN}
          max={ROTATION_MAX}
          step={ROTATION_AMOUNT}
          onChange={onRotationChange}
          value={rotation}
        />
      </InputWrapper>
      <InputWrapper>
        <button onClick={() => setFlipX((flipX) => flipX * -1)}>FlipX</button>
        <button onClick={() => setFlipY((flipY) => flipY * -1)}>FlipY</button>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="sidebar-rotation">Greyscale:</label>
        <input
          id="sidebar-opacity"
          type="range"
          min={GREYSCALE_MIN}
          max={GREYSCALE_MAX}
          step={GREYSCALE_AMOUNT}
          onChange={onGreyscaleChange}
          value={grayscale}
        />
      </InputWrapper>
    </Wrapper>
  );
}
