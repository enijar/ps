import styled from "styled-components";
import { MAX_CANVAS_WIDTH, MOBILE_WIDTH } from "../../config/consts";
import { TRANSPARENT_BACKGROUND } from "../../config/images";

export const CanvasWrapper = styled.div`
  flex: 1 0;
  width: 100%;
  max-width: ${MAX_CANVAS_WIDTH}px;

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
