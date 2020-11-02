import React from "react";
import { Provider } from "react-redux";
import getStore from "./redux/store";
import Pokemones from "./components/Pokemones";

export default function App() {
  const store = getStore();
  return (
    <Provider store={store}>
      <Pokemones />
    </Provider>
  );
}
