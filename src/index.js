import React from "react";
import App from "./components/App";
import { store } from "./store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client";
import { withApollo } from '@apollo/client/react/hoc'


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ApolloProvider client={withApollo}>
  <Provider store={store}>
    <BrowserRouter>
      <App />
     </BrowserRouter>
  </Provider>
  </ApolloProvider>,
);