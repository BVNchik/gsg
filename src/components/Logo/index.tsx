import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import logoIcon from "./logo.png";
import { Logo } from "./styles";

export function LogoLink({
  url = "/",
  className,
}: {
  url?: string;
  className?: string;
}): ReactElement {
  return (
    <Link to={url}>
      <Logo className={className} src={logoIcon} />
    </Link>
  );
}
