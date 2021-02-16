import React from "react";
import ReactDOM from "react-dom";

import { UiProvider } from "./utils/UiContext";

import App from "./App";

ReactDOM.render(
  <UiProvider>
    <App />
  </UiProvider>,
  document.getElementById("root")
);
