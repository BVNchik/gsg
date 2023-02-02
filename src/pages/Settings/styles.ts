import styled from "styled-components";

import { Spinner as SpinnerBase } from "components/Spinner";

export const Content = styled.div`
  width: 540px;
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

export const Button = styled.button`
  background-color: #c0c0c0;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 12px;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    background-color: #b0b0b0;
  }

  & + & {
    margin-top: 0;
  }
`;

export const StatisticButton = styled(Button)`
  background-color: #213e45;

  &:hover {
    background-color: #14353d;
  }
`;

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
