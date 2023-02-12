import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: #c0c0c0;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 12px;

  &:hover {
    background-color: #b0b0b0;
  }

  & + & {
    margin-top: 0;
  }
`;
