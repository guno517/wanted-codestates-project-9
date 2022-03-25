import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import UserInfoCard from "../components/UserInfoCard";
import OverallChart from "../components/OverallChart";
import RankGraph from "../components/Rank/RankGraph";
import Cheerup from "../components/Cheerup/Cheerup";
import MatchContent from "../components/Match/MatchContent";

import { userData } from "../api";
import { useQuery } from "react-query";
import Loading from "components/Loading";

const trackData = require("../metadata/track.json");
const kartData = require("../metadata/kart.json");

export default function UserPage() {
  const { nickname } = useParams();
  const [dataState, setDataState] = useState("indi");
  const { data } = useQuery([nickname], () => userData(nickname), {
    staleTime: 60 * 1000,
  });

  if (!data) {
    return (
      <ContentWrapper>
        <Loading />
      </ContentWrapper>
    );
  }

  let win = 0;
  let perimeter = 0;
  let retire = 0;
  const rankData = [];
  const matchRankArr = [];
  const matchArr = [];
  data.map((game) => {
    if (game.player.matchWin === "1") {
      win += 1;
    }
    if (game.player.matchRank !== "99") {
      perimeter += 1;
    }
    if (game.player.matchRank === "" || game.player.matchRank === "99") {
      rankData.push(8);
      matchRankArr.push("리타이어");
    } else {
      rankData.push(Number(game.player.matchRank));
      matchRankArr.push(game.player.matchRank);
    }
    if (game.player.matchRetired === "1") {
      retire += 1;
    }
    const track = trackData.find((track) => track.id === game.trackId);
    const kart = kartData.find((kart) => kart.id === game.player.kart);
    matchArr.push({
      matchId: game.matchId,
      accountId: game.accountNo,
      type: "",
      endTime: game.endTime,
      result: game.player.matchRank,
      players: game.playerCount,
      track: track,
      kart: kart,
      playTime: game.player.matchTime,
      leftData: "",
    });
    return { win, perimeter, retire };
  });
  return (
    <ContentWrapper>
      <UserInfoCard
        dataState={dataState}
        setDataState={setDataState}
        nickname={nickname}
        character={data[0].character}
      />
      <ChartBoxWrapper>
        <OverallChart win={win} perimeter={perimeter} retire={retire} />
        <RankGraph rankData={rankData} />
        <Cheerup />
      </ChartBoxWrapper>
      <MatchContent matchArr={matchArr} data={data} />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  margin: 0 10rem;
  padding-top: 10px;
  background-color: transparent;
  min-width: 1000px;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
`;

const ChartBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
`;
