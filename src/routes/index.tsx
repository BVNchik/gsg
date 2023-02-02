import React, { ReactNode } from "react";

import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";
import { Statistic } from "../pages/Statistic";

type Route = {
  pathTo: string;
  element: ReactNode;
};

export const routes: Route[] = [
  { pathTo: "/", element: <Home /> },
  { pathTo: "/settings", element: <Settings /> },
  { pathTo: "/statistic", element: <Statistic /> },
];
