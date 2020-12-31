import React from "react";
import { Tool, Wrapper } from "./styles";
import { ActionType } from "../../types";
import { ACTION_MOVE } from "../../consts";
import emitter from "../services/emitter";

export default function Toolbar() {
  const [action, setAction] = React.useState<ActionType>(null);

  const toggleAction = React.useCallback((selectedAction: ActionType) => {
    return () => {
      setAction((action: ActionType) => {
        return action === selectedAction ? null : selectedAction;
      });
    };
  }, []);

  React.useEffect(() => {
    emitter.emit("action", action);
  }, [action]);

  return (
    <Wrapper>
      <Tool
        selected={action === ACTION_MOVE}
        onClick={toggleAction(ACTION_MOVE)}
      >
        <span>move</span>
      </Tool>
    </Wrapper>
  );
}
