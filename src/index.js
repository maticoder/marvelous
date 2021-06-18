import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { UiProvider } from "./utils/UiContext";

import App from "./App";

ReactDOM.render(
  <Router>
    <UiProvider>
      <App />
    </UiProvider>
  </Router>,
  document.getElementById("root")
);
