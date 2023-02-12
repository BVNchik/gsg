import { Link as BaseLink } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  width: 540px;
  height: auto;
  padding: 30px 40px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Label = styled.label`
  line-height: 25px;
`;

export const Link = styled(BaseLink)`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 40px;
  background-color: #213e45;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #14353d;
  }
`;
