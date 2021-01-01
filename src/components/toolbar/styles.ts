import styled, { css } from "styled-components";
import { ToolProps } from "./types";
import vars from "../../config/vars";

export const Wrapper = styled.div`
  width: 50px;
  padding: 0.5em;
`;

export const Tool = styled.button<ToolProps>`
  width: 3em;
  height: 3em;
  border: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  background-size: 80%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: transparent;

  &:hover {
    background-color: ${vars.colors.black100};
  }

  ${(props) => css`
    background-color: ${props.selected ? vars.colors.black100 : "transparent"};
  `}
`;
