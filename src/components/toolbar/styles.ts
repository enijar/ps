import styled, { css } from "styled-components";
import vars from "../../config/vars";

const TOOL_BUTTON_PADDING = "0.5em";

export const ToolbarWrapper = styled.div`
  width: 100%;
  background-color: ${vars.colors.black300};
  padding: 0.25em;
  display: flex;
`;

type ToolButtonProps = {
  active: boolean;
};

export const ToolButton = styled.button<ToolButtonProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${TOOL_BUTTON_PADDING};
  margin-right: 0.25em;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${vars.colors.black100};
  }

  ${(props) => {
    if (!props.active) return;
    return css`
      background-color: ${vars.colors.black100};
    `;
  }}
  img {
    width: 2em;
    align-self: center;
    flex-shrink: 0;
  }
`;
