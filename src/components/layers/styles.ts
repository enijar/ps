import styled, { css } from "styled-components";
import vars from "../../config/vars";

export const LayersWrapper = styled.div`
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 250px;
  margin-top: 1em;
`;

type LayerItemProps = {
  selected: boolean;
};

export const LayerItem = styled.div<LayerItemProps>`
  cursor: pointer;
  padding: 1em 0.5em;
  border-bottom: 1px solid ${vars.colors.black100};
  background-color: ${vars.colors.black200};

  &:hover {
    background-color: ${vars.colors.black400};
  }

  ${(props) => {
    if (!props.selected) return "";
    return css`
      background-color: ${vars.colors.black400};
    `;
  }}

  &:last-child {
    border-bottom: none;
  }

  img,
  div {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    align-self: center;
    width: 1em;
    margin-right: 0.5em;
    flex-shrink: 0;
  }

  div {
    overflow: hidden;
    flex: 1 0;
  }

  label {
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
  }

  input {
    display: block;
    outline: none;
  }
`;
