import React, { ReactElement } from "react";

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./components/GlobalStyles";
import { initApolloClient } from "./graphql/init-apollo-client";
import { SelectedProjectProvider } from "./lib/selectedProject/context";
import { NotFound } from "./pages/NotFound";
import { routes } from "./routes";

export default function App(): ReactElement {
  return (
    <ApolloProvider client={initApolloClient()}>
      <SelectedProjectProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            {routes.map((prop, key) => {
              return (
                <Route path={prop.pathTo} element={prop.element} key={key} />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SelectedProjectProvider>
    </ApolloProvider>
  );
}
