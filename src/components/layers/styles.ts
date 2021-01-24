import styled, { css } from "styled-components";
import vars from "../../config/vars";

export const LayersWrapper = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 250px;
  margin-top: 1em;
`;

type LayerItemProps = {
  selected: boolean;
};

export const LayerItem = styled.div<LayerItemProps>`
  display: flex;
  align-items: center;
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

  img {
    display: block;
    align-self: center;
    width: 1em;
    margin-right: 0.5em;
    flex-shrink: 0;
  }

  div {
    pointer-events: none;
    overflow: hidden;
    flex: 1 0;
  }

  label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
  }
`;
