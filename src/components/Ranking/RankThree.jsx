import React from "react";
import styled from "styled-components";
import RankerCard from "./RankerCard";

export default function RankThree({ data }) {
  // const { matchData } = useQuery([matchId], () => detailMatch(matchId), {
  //   staleTime: 60 * 1000,
  // });

  const matchIdArr = data.map((match) => match.matches);
  const detailMatchArr = async () => {};

  return (
    <TopRank>
      <RankerCard
        nickname={"법사케피"}
        rank={"1"}
        point={"6,991"}
        pointGap={469}
        winRate={65}
        retireRate={2}
      />
      <RankerCard
        nickname={"헤드리강"}
        rank={"2"}
        point={"5,279"}
        pointGap={0}
        winRate={37}
        retireRate={5}
      />
      <RankerCard
        nickname={"S1주행"}
        rank={"3"}
        point={"4,678"}
        pointGap={109}
        winRate={43}
        retireRate={17}
      />
    </TopRank>
  );
}

const TopRank = styled.div`
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 30px;
  width: 100%;
  margin: 0 5rem;
`;
