import React from "react";
import { SidebarWrapper } from "./styles";
import { Flex, Spacer } from "../../styles";
import { PsContextType } from "../../config/types";
import { PsContext } from "../ps/context";
import Filters from "../filters/filters";
import Layers from "../layers/layers";

export default function Sidebar() {
  const { download, reset, layers } = React.useContext(
    PsContext
  ) as PsContextType;

  if (layers.length === 0) return null;

  return (
    <SidebarWrapper>
      <Flex style={{ padding: "1em" }}>
        <button onClick={download}>download</button>
        <Spacer horizontal="0.5em" />
        <button onClick={reset}>reset</button>
      </Flex>
      <Filters />
      <Layers />
    </SidebarWrapper>
  );
}
