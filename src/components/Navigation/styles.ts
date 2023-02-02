import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 8px;
  transition: color 0.5s;

  &:hover {
    color: gray;
  }
`;
