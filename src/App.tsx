import React, { ReactElement } from "react";

import { ApolloProvider } from "@apollo/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./components/GlobalStyles";
import { initApolloClient } from "./graphql/init-apollo-client";
import { SelectedProjectProvider } from "./lib/selectedProject/context";
import { NotFoundPage } from "./pages/NotFound";
import { routes } from "./routes";

export default function App(): ReactElement {
  return (
    <ApolloProvider client={initApolloClient()}>
      <SelectedProjectProvider>
        {/* XXX:  GitHub pages doesn't support the tech used by the BrowserRouter
        https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing */}
        <HashRouter>
          <GlobalStyles />
          <Routes>
            {routes.map((prop, key) => {
              return (
                <Route path={prop.pathTo} element={prop.element} key={key} />
              );
            })}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </SelectedProjectProvider>
    </ApolloProvider>
  );
}
