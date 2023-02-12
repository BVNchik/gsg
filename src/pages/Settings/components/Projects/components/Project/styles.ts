import styled from "styled-components";

import { Button as BaseButton } from "components/Button";
import { TextInput } from "components/TextInput";

export const ProjectRow = styled.div`
  display: flex;

  & + & {
    margin-top: 5px;
  }
`;

export const Button = styled(BaseButton)`
  background-color: #288fc1;
  margin: 10px 0;
  flex: 1;
  margin: 0;
  padding: 0;

  & + & {
    margin-left: 5px;
  }

  &:hover {
    background-color: #1f6282;
  }
`;

export const ProjectInput = styled(TextInput)`
  flex: 3;
  margin-right: 10px;
`;

export const ActionButton = styled(Button)`
  background-color: #4f282d;

  &:hover {
    background-color: #44171c;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 25%;
  right: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

export const Icon = styled.svg`
  position: absolute;
  top: 55%;
  transform: translateY(-55%);
  right: 2px;
  height: 20px;
`;
