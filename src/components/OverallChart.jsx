import React from "react";
import styled from "styled-components";

export default function OverallChart({ win, perimeter, retire }) {
  const winRate = Math.round((win / 200) * 100);
  const perimeterRate = Math.round((perimeter / 200) * 100);
  const retireRate = Math.round((retire / 200) * 100);
  return (
    <OverallWrapper>
      <OverallTitle>
        <div>
          <span>종합</span> 전적
        </div>
        <div>
          200전 {win}승 {200 - win}패
        </div>
      </OverallTitle>
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
          <div>완주율</div>
          <PieWrapper>
            <div>
              <Pie percent={`${perimeterRate}`} color="#9bd728">
                {perimeterRate}%
              </Pie>
            </div>
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
      <OverallBottom>
        <div>
          <span>최다주행</span>모드
        </div>
        <div>통합</div>
      </OverallBottom>
    </OverallWrapper>
  );
}

const OverallWrapper = styled.div`
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  height: 264px;
`;

const OverallTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 12px;
  padding: 0 8px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;

  & span {
    color: #07f;
  }
`;

const OverallItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const OverallItem = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  border-right: 1px solid #f2f2f2;
  height: 145px;

  &:last-child {
    border-right: none;
  }
`;

const OverallBottom = styled.div`
  margin: 8px 8px 8px 8px;
  padding: 8px 8px 8px 8px;
  border-top: 1px solid #f2f2f2;
  line-height: 30px;
  display: flex;
  justify-content: space-between;

  & span {
    color: #07f;
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
