import { ApolloProvider } from "@apollo/client";
import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initApolloClient } from "./graphql/init-apollo-client";
import { NotFound } from "./pages/NotFound";
import { routes } from "./routes";

export default function App(): ReactElement {
  return (
    <ApolloProvider client={initApolloClient()}>
      <BrowserRouter>
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route path={prop.pathTo} element={prop.element} key={key} />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
