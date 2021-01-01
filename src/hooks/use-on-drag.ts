import React from "react";

export default function useOnDrag() {
  return React.useCallback((event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault();
  }, []);
}
