import { Inner, Wrapper } from "./styles";
import { TEST } from "../../config/images";
import PsContextProvider from "../../context/ps";
import Toolbar from "../toolbar/toolbar";
import Canvas from "../canvas/canvas";
import Sidebar from "../sidebar/sidebar";

export default function Ps() {
  return (
    <PsContextProvider>
      <Wrapper>
        <Inner>
          <Toolbar />
          <Canvas width={640} height={480} src={TEST} />
          <Sidebar />
        </Inner>
      </Wrapper>
    </PsContextProvider>
  );
}
