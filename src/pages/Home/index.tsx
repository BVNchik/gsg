import React, { ReactElement } from "react";

import { LogoAnimation } from "components/LogoAnimation";
import { PageWrapper } from "components/PageWrapper";

import { Container, StartLink } from "./styles";

export function Home(): ReactElement {
  return (
    <PageWrapper>
      <Container>
        <LogoAnimation />
        <StartLink to="/main">Start</StartLink>
      </Container>
    </PageWrapper>
  );
}
