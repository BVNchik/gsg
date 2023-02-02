import React from "react";

import { SpinnerBase } from "./styles";

export function Spinner({ className }: { className?: string }) {
  return <SpinnerBase className={className} />;
}
