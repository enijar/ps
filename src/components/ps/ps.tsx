import React from "react";
import { PsFlex, PsInner, PsWrapper } from "./styles";
import { Props } from "../../config/types";
import Toolbar from "../toolbar/toolbar";
import Canvas from "../canvas/canvas";
import Sidebar from "../sidebar/sidebar";
import PsContextProvider from "./context";

export default function Ps({ src }: Props) {
  return (
    <PsContextProvider src={src}>
      <PsWrapper>
        <PsInner>
          <Toolbar />
          <PsFlex>
            <Canvas />
            <Sidebar />
          </PsFlex>
        </PsInner>
      </PsWrapper>
    </PsContextProvider>
  );
}
