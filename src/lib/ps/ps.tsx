import { Wrapper, Inner } from "./styles";
import Canvas from "../canvas/canvas";
import { TEST } from "../config/images";

export default function Ps() {
  return (
    <Wrapper>
      <Inner>
        <Canvas width={640} height={480} src={TEST} />
      </Inner>
    </Wrapper>
  );
}
