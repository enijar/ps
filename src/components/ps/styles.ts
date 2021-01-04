import styled from "styled-components";
import vars from "../../config/vars";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${vars.colors.black100};
  color: ${vars.colors.white};
  user-select: none;

  button {
    border: none;
    color: ${vars.colors.black300};
    background-color: ${vars.colors.white};
    padding: 0.25em 1em;
  }
`;

export const Canvas = styled.div`
  background-repeat: repeat;
`;
