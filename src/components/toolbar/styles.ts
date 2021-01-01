import styled, { css } from "styled-components";
import { ToolProps } from "./types";
import vars from "../../config/vars";

const WRAPPER_WIDTH = 50;
const TOOL_WIDTH = WRAPPER_WIDTH * 0.75;

export const Wrapper = styled.div`
  width: ${WRAPPER_WIDTH}px;
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tool = styled.button<ToolProps>`
  max-width: ${TOOL_WIDTH}px;
  width: 100%;
  height: 0;
  padding: 0 0 calc(100% / ${WRAPPER_WIDTH} * ${TOOL_WIDTH}) 0;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: transparent;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${vars.colors.black100};
  }

  ${(props) => css`
    background-color: ${props.selected ? vars.colors.black100 : "transparent"};
  `}
`;
