import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./Login_Page/Login_Context";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <Context>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Context>,
  document.getElementById("root")
);
