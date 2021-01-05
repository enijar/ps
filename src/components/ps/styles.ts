import styled from "styled-components";
import vars from "../../config/vars";
import { TRANSPARENT_BACKGROUND } from "../../config/images";

const MOBILE_WIDTH = 700;
const MAX_CANVAS_WIDTH = 800;
const MAX_SIDEBAR_WIDTH = 200;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${vars.colors.black100};
  color: ${vars.colors.white};
  user-select: none;
  padding: 1em;

  button {
    border: none;
    color: ${vars.colors.black300};
    background-color: ${vars.colors.white};
    padding: 0.25em 1em;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${MAX_CANVAS_WIDTH + MAX_SIDEBAR_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
`;

export const Canvas = styled.div`
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
  }
`;

export const Sidebar = styled.div`
  align-self: flex-start;
  padding: 1em;
  width: 100%;
  max-width: ${MAX_SIDEBAR_WIDTH}px;
  background-color: ${vars.colors.black300};

  @media (max-width: ${MOBILE_WIDTH}px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

export const Toolbar = styled.div`
  width: 100%;
  padding: 1em;
  background-color: ${vars.colors.black300};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
