import styled, { css } from "styled-components";
import { ToolProps } from "./types";

export const Wrapper = styled.div`
  width: 50px;
  padding: 0.5em;
`;

export const Tool = styled.button<ToolProps>`
  border: none;
  padding: 1em;
  user-select: none;
  cursor: pointer;
  outline: none;

  span {
    font-size: 0.75em;
    color: #fff;
  }

  ${(props) => css`
    background-color: ${props.selected ? "#222" : "#000"};
  `}
`;
