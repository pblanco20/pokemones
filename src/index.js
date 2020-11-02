import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import getStore from "./redux/store";
import pokeReducer from "./redux/pokeReducer";
import App from "./App";

const store = getStore(pokeReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App data={store.getState()} />
  </Provider>,
  rootElement
);
