import React from "react";
import { PsFlex, PsInner, PsWrapper } from "./styles";
import Toolbar from "../toolbar/toolbar";
import Canvas from "../canvas/canvas";
import Sidebar from "../sidebar/sidebar";
import PsContextProvider from "./context";

export default function Ps() {
  return (
    <PsContextProvider>
      <PsWrapper>
        <PsInner>
          <PsFlex>
            <Toolbar />
            <Canvas />
            <Sidebar />
          </PsFlex>
        </PsInner>
      </PsWrapper>
    </PsContextProvider>
  );
}
