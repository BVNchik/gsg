import styled from "styled-components";

export const Title = styled.div`
  padding: 30px 0;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  height: fit-content;

  & > div {
    & > span {
      font-size: 50px;
      animation: none;
      opacity: 1;
    }
    &:hover {
      & > span {
        display: contents;
      }
    }
  }
`;

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
  margin: 10px 0;
  padding: 12px;

  &:hover {
    background-color: #b0b0b0;
  }
`;
