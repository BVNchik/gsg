import styled from "styled-components";

import { Spinner as SpinnerBase } from "components/Spinner";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex: 1 1 auto;
  position: relative;
`;

export const Spinner = styled(SpinnerBase)`
  top: 45%;
  left: 50%;
  transform: translate(50%, -50%);
  width: 50px;
  height: 50px;
`;
