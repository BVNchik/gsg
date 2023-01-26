import React, { ReactElement } from "react";

import { Letter, AnimationContainer } from "./styles";

export function LogoAnimation({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <AnimationContainer className={className}>
      <Letter>G</Letter>
      <Letter>i</Letter>
      <Letter>t</Letter>
      <Letter>h</Letter>
      <Letter>u</Letter>
      <Letter>b</Letter>
      <Letter>&nbsp;</Letter>
      <Letter>S</Letter>
      <Letter>t</Letter>
      <Letter>a</Letter>
      <Letter>t</Letter>
      <Letter>i</Letter>
      <Letter>s</Letter>
      <Letter>t</Letter>
      <Letter>i</Letter>
      <Letter>c</Letter>
      <Letter>s</Letter>
      <Letter>&nbsp;</Letter>
      <Letter>G</Letter>
      <Letter>e</Letter>
      <Letter>n</Letter>
      <Letter>e</Letter>
      <Letter>r</Letter>
      <Letter>a</Letter>
      <Letter>t</Letter>
      <Letter>o</Letter>
      <Letter>r</Letter>
    </AnimationContainer>
  );
}
