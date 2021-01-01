import styled from "styled-components";
import vars from "../../config/vars";

const WRAPPER_WIDTH = 250;

export const Wrapper = styled.div`
  width: ${WRAPPER_WIDTH}px;
  padding: 0 0.5em;
  display: inline-block;
  vertical-align: top;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    margin-right: 0.5em;
  }

  input {
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0.25em 0.5em;
    margin: 0.25em;
    background-color: ${vars.colors.black200};

    &:hover {
      background-color: ${vars.colors.black100};
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
