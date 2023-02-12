import React, { ChangeEvent, ReactElement, useCallback, useState } from "react";

import { generateTokenUrl } from "config";

import { ReactComponent as HideToken } from "./eye-close.svg";
import { ReactComponent as ShowToken } from "./eye.svg";
import { Icon, Container, Error, Info, TextInput } from "./styles";

type TokenInputProps = {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValidToken: boolean;
};

export function TokenInput({
  value,
  onChange,
  isValidToken,
}: TokenInputProps): ReactElement {
  const [showToken, setShowToken] = useState<boolean>(false);

  const handleShowApiToken = useCallback(() => {
    setShowToken((state) => !state);
  }, []);

  const EndAdornmentIcon = showToken ? HideToken : ShowToken;

  return (
    <Container>
      <TextInput
        isValid={!!value && isValidToken}
        label="Your token"
        value={value}
        onChange={onChange}
        type={showToken ? "text" : "password"}
        endAdornmentIcon={<Icon as={EndAdornmentIcon} />}
        onClickAdornment={handleShowApiToken}
        info={
          <Info
            href={generateTokenUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            How generate token
          </Info>
        }
      />
      {!isValidToken && value && <Error>Token is invalid</Error>}
    </Container>
  );
}
