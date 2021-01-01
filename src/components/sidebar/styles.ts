import styled from "styled-components";

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
`;
