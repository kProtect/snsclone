import React from "react";
import App from "./components/App";
import { store } from "./store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
     </BrowserRouter>
  </Provider>,
);