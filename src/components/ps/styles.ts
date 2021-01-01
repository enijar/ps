import styled from "styled-components";
import vars from "../../config/vars";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${vars.colors.black100};
  color: ${vars.colors.white};
  user-select: none;
`;

export const Inner = styled.div`
  display: inline-flex;
  padding: 1em;
  background-color: ${vars.colors.black300};
`;
