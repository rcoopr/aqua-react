import React, { createContext, useState } from "react";

export const ToolContext = createContext();

export function ToolContextProvider({ children }) {
  const [currentTool, setCurrentTool] = useState("air");
  const [temporaryTool, setTemporaryTool] = useState("air");

  return (
    <ToolContext.Provider
      value={{ currentTool, setCurrentTool, temporaryTool, setTemporaryTool }}
    >
      {children}
    </ToolContext.Provider>
  );
}
