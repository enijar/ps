import React from "react";
import { Wrapper, InputWrapper } from "./styles";
import { PsContext, PsContextType } from "../../context/ps";
import { OPACITY_AMOUNT, OPACITY_MAX, OPACITY_MIN } from "../../config/consts";

export default function Sidebar() {
  const { opacity, setOpacity } = React.useContext(PsContext) as PsContextType;

  const onOpacityChange = React.useCallback<React.ChangeEventHandler>(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOpacity(parseFloat(event.target.value));
    },
    [setOpacity]
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
    </Wrapper>
  );
}
