import styled, { keyframes } from "styled-components";

const sideSlide = keyframes`
  60% {
    transform: translate(20px, 0) scale(1);
    color: white;
  }

  80% {
    transform: translate(20px, 0) scale(1);
    color: white;
  }

  99% {
    transform: translate(0) scale(1.2);
    color: #C0C0C0;
  }

  100% {
    transform: translate(0) scale(1);
    opacity: 1;
    color: white;
  }
`;

export const Letter = styled.span``;

export const AnimationContainer = styled.div`
  height: fit-content;
  &:hover {
    & > span {
      display: inline-block;
    }
  }
  & > span {
    cursor: default;
    transform: translate(-300px, 0) scale(0);
    font-size: 70px;
    color: white;
    opacity: 0;
    animation: ${sideSlide} 0.9s infinite;
  }

  & > span:nth-of-type(2) {
    animation-delay: 0.05s;
  }
  & > span:nth-of-type(3) {
    animation-delay: 0.1s;
  }
  & > span:nth-of-type(4) {
    animation-delay: 0.15s;
  }
  & > span:nth-of-type(5) {
    animation-delay: 0.2s;
  }
  & > span:nth-of-type(6) {
    animation-delay: 0.25s;
  }
  & > span:nth-of-type(7) {
    animation-delay: 0.3s;
  }
  & > span:nth-of-type(8) {
    animation-delay: 0.33s;
  }
  & > span:nth-of-type(9) {
    animation-delay: 0.35s;
  }
  & > span:nth-of-type(10) {
    animation-delay: 0.38s;
  }
  & > span:nth-of-type(11) {
    animation-delay: 0.4s;
  }
  & > span:nth-of-type(12) {
    animation-delay: 0.45s;
  }
  & > span:nth-of-type(13) {
    animation-delay: 0.5s;
  }
  & > span:nth-of-type(14) {
    animation-delay: 0.55s;
  }
  & > span:nth-of-type(15) {
    animation-delay: 0.6s;
  }
  & > span:nth-of-type(16) {
    animation-delay: 0.65s;
  }
  & > span:nth-of-type(17) {
    animation-delay: 0.7s;
  }
  & > span:nth-of-type(18) {
    animation-delay: 0.75s;
  }
  & > span:nth-of-type(19) {
    animation-delay: 0.8s;
  }
  & > span:nth-of-type(20) {
    animation-delay: 0.85s;
  }
  & > span:nth-of-type(21) {
    animation-delay: 0.9s;
  }
  & > span:nth-of-type(22) {
    animation-delay: 0.95s;
  }
  & > span:nth-of-type(23) {
    animation-delay: 1s;
  }
  & > span:nth-of-type(24) {
    animation-delay: 1.05s;
  }
  & > span:nth-of-type(25) {
    animation-delay: 1.1s;
  }
  & > span:nth-of-type(26) {
    animation-delay: 1.15s;
  }
  & > span:nth-of-type(27) {
    animation-delay: 1.2s;
  }
`;
