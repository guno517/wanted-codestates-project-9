import React, { useState } from "react";
import styled from "styled-components";
import TopThreeChart from "./TopThreeChart";
import { FcPlus } from "react-icons/fc";
import { useEffect } from "react";

export default function RankerCard({
  nickname,
  rank,
  point,
  pointGap,
  winRate,
  retireRate,
}) {
  const [medal, setMedal] = useState();
  console.log(rank);
  useEffect(() => {
    if (rank === "1") {
      setMedal("goldmedal");
    } else if (rank === "2") {
      setMedal("silvermedal");
    } else if (rank === "3") {
      setMedal("bronzemedal");
    }
  }, [rank]);
  return (
    <Ranker>
      <img
        src={`https://tmi.nexon.com/img/assets/icon_${medal}.png`}
        alt="medal"
        className="medal"
      />
      <RankName>
        <p className="nick">
          <a href="/rank">{nickname}</a>
        </p>
        <p className="rank">
          순위
          <span>{rank}위</span>
        </p>
        <p className="point">
          누적포인트
          <span>{point}PT</span>
          <span className="green">
            <FcPlus />
            {pointGap}
          </span>
        </p>
      </RankName>
      <RankChartWrapper>
        <TopThreeChart winRate={winRate} retireRate={retireRate} />
      </RankChartWrapper>
    </Ranker>
  );
}

const Ranker = styled.div`
  position: relative;
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 42px;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);

  & .medal {
    position: absolute;
    top: -12px;
    left: 10px;
  }
`;

const RankName = styled.div`
  padding-top: 25px;
  padding-bottom: 20px;
  padding-left: 40px;
  border-radius: 10px;
  background-image: url("https://tmi.nexon.com/img/background_flag_rank.png");
  background-size: cover;
  background-position: 50%;

  & p {
    margin: 0;
  }

  & .nick {
    width: 200px;
    margin-bottom: 12px;
  }
  & .rank {
    font-size: 14px;
  }
  & a {
    text-decoration: none;
    color: #07f;
    font-weight: 600;
    font-size: 18px;
  }
  & span {
    margin-left: 5px;
    font-weight: bold;
  }
  & .green {
    color: #9bd728;
  }
`;

const RankChartWrapper = styled.div`
  border-top: 1px solid #07f;
`;
