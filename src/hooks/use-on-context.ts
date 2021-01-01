import React from "react";

export default function useOnContext() {
  return React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);
}
