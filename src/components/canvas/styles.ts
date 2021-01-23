import styled from "styled-components";
import { MAX_CANVAS_WIDTH, MOBILE_WIDTH } from "../../config/consts";
import { TRANSPARENT_BACKGROUND } from "../../config/images";
import vars from "../../config/vars";

export const CanvasWrapper = styled.div`
  flex: 1 0;
  width: 100%;
  max-width: ${MAX_CANVAS_WIDTH}px;
  background-color: ${vars.colors.black400};

  @media (max-width: ${MOBILE_WIDTH}px) {
    flex: 0 1;
  }

  svg {
    display: block;
    background-repeat: repeat;
    background-image: url(${TRANSPARENT_BACKGROUND});

    image {
      pointer-events: none;
    }
  }
`;

export const CanvasHelper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
