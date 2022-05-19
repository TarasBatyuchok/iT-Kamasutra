import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import state from './redux/state';
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
      state={state}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
