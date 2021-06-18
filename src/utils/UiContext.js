import React, { useState, createContext } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [cursor, setCursor] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <UiContext.Provider
      value={{
        cursor,
        setCursor,
        menu,
        setMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
