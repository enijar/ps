import React from "react";
import { PsInner, PsWrapper } from "./styles";
import { Flex } from "../../styles";
import Toolbar from "../toolbar/toolbar";
import Canvas from "../canvas/canvas";
import Sidebar from "../sidebar/sidebar";
import PsContextProvider from "./context";

export default function Ps() {
  return (
    <PsContextProvider>
      <PsWrapper>
        <PsInner>
          <Flex>
            <Toolbar />
            <Canvas />
            <Sidebar />
          </Flex>
        </PsInner>
      </PsWrapper>
    </PsContextProvider>
  );
}
