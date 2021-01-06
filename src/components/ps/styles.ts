import styled from "styled-components";
import vars from "../../config/vars";
import {
  MAX_CANVAS_WIDTH,
  MAX_SIDEBAR_WIDTH,
  MOBILE_WIDTH,
} from "../../config/consts";

export const PsWrapper = styled.div`
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

export const PsInner = styled.div`
  width: 100%;
  max-width: ${MAX_CANVAS_WIDTH + MAX_SIDEBAR_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
`;

export const PsFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
