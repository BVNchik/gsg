import React from "react";

import { Container, Link } from "./styles";

const ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Settings",
    path: "/settings",
  },
  {
    name: "Statistic",
    path: "/statistic",
  },
];

export function Navigation() {
  return (
    <Container>
      {ITEMS.map(({ name, path }) => (
        <Link to={path} key={name}>
          {name}
        </Link>
      ))}
    </Container>
  );
}
