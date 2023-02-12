import React, { ReactElement } from "react";

import { LogoAnimation } from "components/LogoAnimation";
import { PageWrapper } from "components/PageWrapper";

import { Container, StartLink, Logo } from "./styles";

export function Home(): ReactElement {
  return (
    <PageWrapper withHeader={false}>
      <Container>
        <Logo />
        <LogoAnimation />
        <StartLink to="/settings">Start</StartLink>
      </Container>
    </PageWrapper>
  );
}
