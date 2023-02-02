import React, { ReactElement } from "react";

import { Content } from "./styles";

export function Suggestion({
  suggestion,
  active,
}: {
  suggestion: string;
  active: boolean;
}): ReactElement {
  return <Content active={active}>{suggestion}</Content>;
}
