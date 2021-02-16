import React, { useState, createContext } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [cursor, setCursor] = useState(false);

  return (
    <UiContext.Provider
      value={{
        cursor,
        setCursor,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
