import React, { PropsWithChildren, ReactElement } from "react";

import { Logo } from "components/Logo";
import { LogoAnimation } from "components/LogoAnimation";
import { Navigation } from "components/Navigation";

import { Wrapper, Background, Header, LogoContainer } from "./styles";

export function PageWrapper({
  children,
  withHeader = true,
}: PropsWithChildren<{ withHeader?: boolean }>): ReactElement {
  return (
    <Wrapper withHeader={withHeader}>
      {withHeader && (
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <LogoAnimation />
          <Navigation />
        </Header>
      )}
      <Background />
      {children}
    </Wrapper>
  );
}
