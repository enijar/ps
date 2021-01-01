import styled, { css } from "styled-components";
import { WrapperProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  background-repeat: repeat;
  overflow: hidden;
  position: relative;
  user-select: none;

  ${(props) => css`
    img {
      position: absolute;
      top: 0;
      left: 0;
      max-width: ${props.width}px;
      max-height: ${props.height}px;
    }
  `}
`;
