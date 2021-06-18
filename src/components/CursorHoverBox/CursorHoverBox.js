import React, { useContext } from "react";

import { UiContext } from "../../utils/UiContext";

const CursorHoverBox = ({ children }) => {
  const { setCursor } = useContext(UiContext);

  return (
    <div
      className="cursorHoverBox"
      onMouseEnter={() => setCursor(true)}
      onMouseLeave={() => setCursor(false)}
      onClick={() => setCursor(false)}
    >
      {children}
    </div>
  );
};

export default CursorHoverBox;
