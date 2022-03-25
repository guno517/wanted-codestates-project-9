import React from "react";
import styled from "styled-components";

export default function TopThreeChart({ winRate, retireRate }) {
  return (
    <OverallItemWrapper>
      <OverallItem>
        <div>승률</div>
        <PieWrapper>
          <Pie percent={`${winRate}`} color="#07f">
            {winRate}%
          </Pie>
          <UnderPieWrapper>
            <UnderPie percent={`${100}`} color="#e9e9e9"></UnderPie>
          </UnderPieWrapper>
        </PieWrapper>
      </OverallItem>
      <OverallItem>
        <div>리타이어율</div>
        <PieWrapper>
          <Pie percent={`${retireRate}`} color="red">
            {retireRate}%
          </Pie>
          <UnderPieWrapper>
            <UnderPie percent={`${100}`} color="#e9e9e9"></UnderPie>
          </UnderPieWrapper>
        </PieWrapper>
      </OverallItem>
    </OverallItemWrapper>
  );
}

const OverallItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const OverallItem = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #f2f2f2;
  height: 115px;

  &:last-child {
    border-right: none;
  }
`;

const Pie = styled.div`
  @property --p {
    syntax: "<number>";
    inherits: true;
    initial-value: 1;
  }

  --p: ${(props) => props.percent};
  --b: 10px;
  --c: ${(props) => props.color};
  --w: 90px;

  width: 90px;
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 20px;
  color: var(--c);
  animation: p 1s 0.5s both;
  z-index: 100;

  @keyframes p {
    from {
      --p: 0;
    }
  }

  &::before,
  ::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/0
        var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
    /* radial-gradient(farthest-side, #e9e9e9 2%, #0000) top/0 var(--b)
        no-repeat,
      conic-gradient(#e9e9e9 calc((100 - var(--p)) * 1%), #0000 0); */
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );

    &::after {
      inset: calc(50% - var(--b) / 2);
      content: none;
      background: var(--c);
      transform: rotate() (calc(var(--p) * 3.6deg))
        translateY(calc(50% - var(--w) / 2));
    }
  }
`;

const PieWrapper = styled.div`
  margin: 0 auto;
  z-index: 100;
`;

const UnderPie = styled.div`
  @property --p {
    syntax: "<number>";
    inherits: true;
    initial-value: 1;
  }

  --p: ${(props) => props.percent};
  --b: 10px;
  --c: ${(props) => props.color};
  --w: 90px;

  width: 90px;
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 20px;
  color: var(--c);

  &::before,
  ::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/0
        var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );

    &::after {
      inset: calc(50% - var(--b) / 2);
      content: none;
      background: var(--c);
      transform: rotate() (calc(var(--p) * 3.6deg))
        translateY(calc(50% - var(--w) / 2));
    }
  }
`;

const UnderPieWrapper = styled.div`
  position: relative;
  top: -100px;
`;
