import styled from "styled-components";
import vars from "../../config/vars";
import { MAX_SIDEBAR_WIDTH, MOBILE_WIDTH } from "../../config/consts";

export const SidebarWrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  max-width: ${MAX_SIDEBAR_WIDTH}px;
  background-color: ${vars.colors.black300};

  @media (max-width: ${MOBILE_WIDTH}px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
`;
