import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoIcon from "./logo.png";

export const LogoBase = styled(Link)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: url(${LogoIcon});
  background-size: cover;
  cursor: pointer;
`;
