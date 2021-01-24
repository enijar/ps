import styled from "styled-components";
import { MOBILE_WIDTH } from "./config/consts";

type FlexProps = {
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify ?? "center"};
  flex-wrap: wrap;

  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

type SpacerProps = {
  vertical?: string;
  horizontal?: string;
};

export const Spacer = styled.div<SpacerProps>`
  margin-top: ${(props) => props.vertical ?? "0px"};
  margin-right: ${(props) => props.horizontal ?? "0px"};
`;
