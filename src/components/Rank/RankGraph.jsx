import React from "react";
import styled from "styled-components";
import RankChart from "./RankChart";

export default function RankGraph({ rankData }) {
  const rankAvg =
    rankData.reduce((prev, next) => prev + next) / rankData.length;
  const recentRank = rankData.slice(0, 50);
  const recentAvg = recentRank.reduce((prev, next) => prev + next) / 50;
  return (
    <RankWrapper>
      <RankTitle>
        <div>
          <span>순위변동</span> 추이
        </div>
        <div>
          지난 {rankData.length}경기 <span>{rankAvg} </span> 최근 50경기
          <span>{recentAvg}위</span>
        </div>
      </RankTitle>
      <RankChartWrapper>
        <RankChart recentRank={recentRank} />
      </RankChartWrapper>
    </RankWrapper>
  );
}

const RankWrapper = styled.div`
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  height: 264px;
`;

const RankTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 12px;
  padding: 0 8px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
  min-width: 350px;

  & span {
    color: #07f;
  }
`;

const RankChartWrapper = styled.div``;
