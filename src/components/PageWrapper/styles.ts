import styled from "styled-components";

export const Background = styled.div`
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

export const Wrapper = styled.div<{ withLogo: boolean }>`
  display: ${(props) => (props.withLogo ? "block" : "flex")};
  height: 100%;
  width: 100vw;
`;

export const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gray;

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

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
`;
