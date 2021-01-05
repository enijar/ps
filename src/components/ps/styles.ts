import styled from "styled-components";
import vars from "../../config/vars";
import { TRANSPARENT_BACKGROUND } from "../../config/images";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${vars.colors.black100};
  color: ${vars.colors.white};
  user-select: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  button {
    border: none;
    color: ${vars.colors.black300};
    background-color: ${vars.colors.white};
    padding: 0.25em 1em;
  }
`;

export const Canvas = styled.div`
  flex: 1 0;
  width: 100%;
  max-width: 800px;

  @media (max-width: 700px) {
    flex: 0 1;
  }

  svg {
    background-repeat: repeat;
    background-image: url(${TRANSPARENT_BACKGROUND});
  }
`;

export const Toolbar = styled.div`
  align-self: flex-start;
  padding: 1em;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
