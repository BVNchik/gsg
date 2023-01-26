import React, {
  ChangeEvent,
  ReactNode,
  HTMLInputTypeAttribute,
  ReactElement,
  FocusEvent,
  forwardRef,
  ForwardedRef,
} from "react";

import { Input, EndAdornment, Wrapper, Label } from "./styles";

type TextInputProps = {
  className?: string;
  value?: string;

  onClickAdornment?: () => void;
  type?: HTMLInputTypeAttribute;
  endAdornmentIcon?: ReactNode;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(Text);

export function Text(
  {
    className,
    value,
    onChange,
    type = "text",
    endAdornmentIcon,
    onClickAdornment,
    onBlur,
    onFocus,
    label,
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}
      <EndAdornment onClick={onClickAdornment}>{endAdornmentIcon}</EndAdornment>
      <Input
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        autoComplete="off"
      ></Input>
    </Wrapper>
  );
}
