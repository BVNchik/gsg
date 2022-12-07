import React, { ReactNode } from "react";

type Route = {
  pathTo: string;
  element: ReactNode;
};

export const routes: Route[] = [
  { pathTo: "/", element: <div>HOME</div> },
  { pathTo: "/main", element: <div>MAIN</div> },
];
