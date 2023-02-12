import styled from "styled-components";

import { Spinner as SpinnerBase } from "components/Spinner";

export const Container = styled.div``;
export const Content = styled.div``;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

export const Spinner = styled(SpinnerBase)`
  position: relative;
  bottom: auto;
`;

export const ViewerContainer = styled.div`
  display: grid;
  justify-items: center;
  font-size: 18px;
`;

export const ViewerName = styled.span`
  font-size: 13px;
`;
