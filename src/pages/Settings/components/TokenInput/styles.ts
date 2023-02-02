import styled from "styled-components";

import { TextInput as TextInputBase } from "components/TextInput";

export const Icon = styled.svg`
  position: absolute;
  bottom: 10px;
  right: 2px;
  height: 20px;
`;

export const Container = styled.div``;

export const Error = styled.div`
  color: red;
  font-size: 13px;
`;

export const Info = styled.a`
  text-decoration: revert;
  color: #44171c;
`;

export const TextInput = styled(TextInputBase)<{ isValid: boolean }>`
  & > input {
    ${(props) => (props.isValid ? { "border-color": "green" } : null)};
  }
`;
