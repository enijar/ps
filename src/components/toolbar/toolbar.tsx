import React from "react";
import { Tool, Wrapper } from "./styles";
import { ActionType } from "../../config/types";
import { ACTION_MOVE, ACTION_ZOOM } from "../../config/consts";
import { MOVE_ICON, ZOOM_ICON } from "../../config/images";
import { PsContext, PsContextType } from "../../context/ps";

export default function Toolbar() {
  const { action, setAction, keys } = React.useContext(
    PsContext
  ) as PsContextType;

  const toggleAction = React.useCallback(
    (selectedAction: ActionType) => {
      return () => {
        setAction((action: ActionType) => {
          return action === selectedAction ? null : selectedAction;
        });
      };
    },
    [setAction]
  );

  React.useEffect(() => {
    if (keys.includes("z")) toggleAction(ACTION_ZOOM)();
    if (keys.includes("v")) toggleAction(ACTION_MOVE)();
  }, [keys, toggleAction]);

  return (
    <Wrapper>
      <Tool
        selected={action === ACTION_MOVE}
        onClick={toggleAction(ACTION_MOVE)}
        style={{ backgroundImage: `url("${MOVE_ICON}")` }}
        title="Move (v)"
      />
      <Tool
        selected={action === ACTION_ZOOM}
        onClick={toggleAction(ACTION_ZOOM)}
        style={{ backgroundImage: `url("${ZOOM_ICON}")` }}
        title="Zoom (z)"
      />
    </Wrapper>
  );
}
