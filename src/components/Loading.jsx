import React from "react";
import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <Load>
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
    </Load>
  );
}

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg)
  }
`;

const animate = keyframes`
  0%,100%{
    stroke-dashoffset: 440;
  }
  50%{
    stroke-dashoffset: 0;
  }
  50.1%{
    stroke-dashoffset: 880;
  }
`;

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & svg {
    position: relative;
    width: 150px;
    height: 150px;
    animation: ${rotate} 2s linear infinite;

    & circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 10;
      stroke: #07f;
      stroke-linecap: round;
      transform: translate(5px, 5px);
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      animation: ${animate} 4s linear infinite;
    }
  }
`;
