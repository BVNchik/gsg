import { rgba } from "polished";
import styled from "styled-components";

export const Content = styled.div<{ active: boolean }>`
  display: flex;
  height: 35px;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
  background-color: ${(props) => (props.active ? rgba("black", 0.125) : null)};
`;
