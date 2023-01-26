import React, { ChangeEvent, ReactElement, useCallback, useState } from "react";

import { TextInput } from "components/TextInput";

import { ReactComponent as HideToken } from "./eye-close.svg";
import { ReactComponent as ShowToken } from "./eye.svg";
import { Icon } from "./styles";

type TokenInputProps = {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function TokenInput({ value, onChange }: TokenInputProps): ReactElement {
  const [showToken, setShowToken] = useState<boolean>(false);

  const handleShowApiToken = useCallback(() => {
    setShowToken((state) => !state);
  }, []);

  const EndAdornmentIcon = showToken ? HideToken : ShowToken;

  return (
    <TextInput
      label="Your token"
      value={value}
      onChange={onChange}
      type={showToken ? "text" : "password"}
      endAdornmentIcon={<Icon as={EndAdornmentIcon} />}
      onClickAdornment={handleShowApiToken}
    />
  );
}
