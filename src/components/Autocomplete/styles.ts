import styled from "styled-components";

export const SuggestionsContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: #7c97b2;
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;

  & .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
  }
`;
