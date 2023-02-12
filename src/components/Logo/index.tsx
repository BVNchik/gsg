import React, { ReactElement } from "react";

import { LogoBase } from "./styles";

export function Logo({
  url = "/",
  className,
}: {
  url?: string;
  className?: string;
}): ReactElement {
  return <LogoBase to={url} className={className} />;
}
