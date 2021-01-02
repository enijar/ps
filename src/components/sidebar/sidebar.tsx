import React from "react";
import { InputWrapper, Wrapper } from "./styles";
import { PsContext, PsContextType } from "../../context/ps";
import {
  CONTRAST_AMOUNT,
  CONTRAST_MAX,
  CONTRAST_MIN,
  HUE_AMOUNT,
  HUE_MAX,
  HUE_MIN,
  OPACITY_AMOUNT,
  OPACITY_MAX,
  OPACITY_MIN,
  ROTATION_AMOUNT,
  ROTATION_MAX,
  ROTATION_MIN,
  SATURATION_AMOUNT,
  SATURATION_MAX,
  SATURATION_MIN,
} from "../../config/consts";

export default function Sidebar() {
  const {
    opacity,
    setOpacity,
    rotation,
    setRotation,
    setFlipX,
    setFlipY,
    saturation,
    setSaturation,
    contrast,
    setContrast,
    hue,
    setHue,
    reset,
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

  const onSaturationChange = React.useCallback<React.ChangeEventHandler>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSaturation(parseFloat(event.target.value));
    },
    [setSaturation]
  );

  const onContrastChange = React.useCallback<React.ChangeEventHandler>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setContrast(parseFloat(event.target.value));
    },
    [setContrast]
  );

  const onHueChange = React.useCallback<React.ChangeEventHandler>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setHue(parseFloat(event.target.value));
    },
    [setHue]
  );

  return (
    <Wrapper>
      <InputWrapper>
        <button onClick={reset}>Reset</button>
      </InputWrapper>
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
          id="sidebar-rotation"
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
        <label htmlFor="sidebar-saturation">Saturation:</label>
        <input
          id="sidebar-saturation"
          type="range"
          min={SATURATION_MIN}
          max={SATURATION_MAX}
          step={SATURATION_AMOUNT}
          onChange={onSaturationChange}
          value={saturation}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="sidebar-contrast">Contrast:</label>
        <input
          id="sidebar-contrast"
          type="range"
          min={CONTRAST_MIN}
          max={CONTRAST_MAX}
          step={CONTRAST_AMOUNT}
          onChange={onContrastChange}
          value={contrast}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="sidebar-hue">Hue:</label>
        <input
          id="sidebar-hue"
          type="range"
          min={HUE_MIN}
          max={HUE_MAX}
          step={HUE_AMOUNT}
          onChange={onHueChange}
          value={hue}
        />
      </InputWrapper>
    </Wrapper>
  );
}
