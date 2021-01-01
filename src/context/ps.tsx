import React from "react";
import { ActionType } from "../config/types";

type Props = {
  children: any;
};

export type PsContextType = {
  action: ActionType;
  setAction: (action: ActionType) => void;
};

export const PsContext = React.createContext({});

export default function PsContextProvider({ children }: Props) {
  const [action, setAction] = React.useState<ActionType>(null);

  return (
    <PsContext.Provider value={{ action, setAction }}>
      {children}
    </PsContext.Provider>
  );
}
