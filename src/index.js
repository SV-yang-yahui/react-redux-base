import React from "react";
import ReactDOM from "react-dom";

import List from "./List";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <List />
  </Provider>,
  rootElement
);
