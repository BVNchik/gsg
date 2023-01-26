import React, { ReactNode } from "react";

import { Home } from "../pages/Home";
import { Main } from "../pages/Main";
import { Repo } from "../pages/Repositories";

type Route = {
  pathTo: string;
  element: ReactNode;
};

export const routes: Route[] = [
  { pathTo: "/", element: <Home /> },
  { pathTo: "/main", element: <Main /> },
  { pathTo: "/statistic", element: <Repo /> },
];
