import styled, { css } from "styled-components";
import vars from "../../config/vars";

const TOOL_BUTTON_PADDING = "0.5em";

export const ToolbarWrapper = styled.div`
  background-color: ${vars.colors.black300};
  padding: 0.25em;
  display: flex;
  flex-direction: column;
`;

type ToolButtonProps = {
  active?: boolean;
  inactive?: boolean;
};

export const ToolButton = styled.button<ToolButtonProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${TOOL_BUTTON_PADDING};
  margin-bottom: 0.25em;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${vars.colors.black100};

    ${(props) => {
      if (!props.inactive) return;
      return css`
        background-color: transparent;
      `;
    }}
  }

  ${(props) => {
    if (!props.active) return;
    return css`
      background-color: ${vars.colors.black100};
    `;
  }}

  img {
    width: 1.5em;
    align-self: center;
    flex-shrink: 0;
  }

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
