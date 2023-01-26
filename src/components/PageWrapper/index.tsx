import React, { PropsWithChildren, ReactElement } from "react";

import { Wrapper, Background } from "./styles";

export function PageWrapper({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  return (
    <Wrapper>
      <Background />
      {children}
    </Wrapper>
  );
}
