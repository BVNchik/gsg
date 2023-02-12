import React, { PropsWithChildren } from "react";

import { BaseButton } from "./styles";

type ButtonProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}>;

export function Button({
  className,
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  return (
    <BaseButton
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}
