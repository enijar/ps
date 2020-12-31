import styled from "styled-components";
import Canvas from "./canvas";
import Toolbar from "./toolbar";
import { TEST } from "./images";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
  color: #ffffff;
  user-select: none;
`;

const Inner = styled.div`
  padding: 1em;
`;

export default function Ps() {
  return (
    <Wrapper>
      <Inner>
        <Canvas width={640} height={480} src={TEST} />
        <Toolbar />
      </Inner>
    </Wrapper>
  );
}
