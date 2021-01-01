import React from "react";
import { ActionType } from "../config/types";

type Props = {
  children: any;
};

export type PsContextType = {
  action: ActionType;
  setAction: (action: ActionType) => void;
  keys: string[];
};

export const PsContext = React.createContext({});

export default function PsContextProvider({ children }: Props) {
  const [action, setAction] = React.useState<ActionType>(null);
  const [keys, setKeys] = React.useState<string[]>([]);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      setKeys((keys: string[]) => {
        if (!keys.includes(key)) return [...keys, key];
        return keys;
      });
    }
    function onKeyUp(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      setKeys((keys: string[]) => {
        const index = keys.indexOf(key);
        if (index > -1) keys.splice(index, 1);
        return [...keys];
      });
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <PsContext.Provider value={{ action, setAction, keys }}>
      {children}
    </PsContext.Provider>
  );
}
