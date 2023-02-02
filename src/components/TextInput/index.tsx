import React, {
  ChangeEvent,
  ReactNode,
  HTMLInputTypeAttribute,
  ReactElement,
  FocusEvent,
  forwardRef,
  ForwardedRef,
} from "react";

import {
  Input,
  EndAdornment,
  Wrapper,
  Label,
  LabelContainer,
  Info,
} from "./styles";

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
  info?: ReactNode;
  placeholder?: string;
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
    info,
    placeholder,
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  return (
    <Wrapper className={className}>
      <LabelContainer>
        {label && <Label>{label}</Label>} {info ? <Info>{info}</Info> : null}
      </LabelContainer>
      <EndAdornment onClick={onClickAdornment}>{endAdornmentIcon}</EndAdornment>
      <Input
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
}
