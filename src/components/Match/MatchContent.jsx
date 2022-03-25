import React from "react";
import styled from "styled-components";
import MatchTab from "./MatchTab";
import MatchLeft from "./MatchLeft";
import MatchRight from "./MatchRight";
import { useState } from "react";
import NonDataMatch from "./NonDataMatch";

const trackJson = require("metadata/track.json");
const kartJson = require("metadata/kart.json");

export default function MatchContent({ matchArr, data }) {
  const [tabState, setTabState] = useState("all");
  const [recordState, setRecordState] = useState("트랙");
  const trackDataArr = matchArr.map((match) => match.track.id);
  const kartDataArr = matchArr.map((match) => match.kart.id);
  const duplicatedTrackId = Array.from(new Set(trackDataArr));
  const duplicatedKartId = Array.from(new Set(kartDataArr));
  // console.log(duplicatedKartId);

  const trackData = duplicatedTrackId.map((id) => {
    const trackIdArr = data.filter((match) => match.trackId === id);
    const trackName = trackJson.find((track) => track.id === id);
    const time = trackIdArr.map((match) => match.player.matchTime);
    const timeFilter = time.filter((zero) => zero !== "");
    let bestRecord = Math.min.apply(null, timeFilter);
    if (bestRecord === Infinity) {
      bestRecord = 0;
    }
    return {
      win: trackIdArr.filter((match) => match.matchResult === "1").length,
      count: trackIdArr.length,
      bestRecord: bestRecord,
      records: time,
      track: trackName.name,
    };
  });
  const sortedTrackData = trackData.sort((a, b) => {
    return b.count - a.count;
  });
  const sameTrack = [];
  trackDataArr.forEach((track) => {
    sameTrack[track] = (sameTrack[track] || 0) + 1;
  });
  const kartData = duplicatedKartId.map((id) => {
    const kartArr = data.filter((match) => match.player.kart === id);
    const kartName = kartJson.find((kart) => kart.id === id);
    return {
      win: kartArr.filter((game) => game.matchResult === "1").length,
      count: kartArr.length,
      kart: kartName.name,
      retire: kartArr.filter((game) => game.player.matchRetired === "1").length,
    };
  });
  const sortedKartData = kartData.sort((a, b) => {
    return b.count - a.count;
  });

  return (
    <MatchWrapper>
      <MatchTab tabState={tabState} setTabState={setTabState} />
      {tabState === "all" ? (
        <MatchContainer>
          <MatchLeft
            sortedTrackData={sortedTrackData}
            sortedKartData={sortedKartData}
            recordState={recordState}
            setRecordState={setRecordState}
          />
          <Right>
            {matchArr &&
              matchArr.map((match) => {
                return <MatchRight match={match} key={match.matchId} />;
              })}
          </Right>
        </MatchContainer>
      ) : (
        <MatchContainer>
          <NonDataMatch
            recordState={recordState}
            setRecordState={setRecordState}
          />
        </MatchContainer>
      )}
    </MatchWrapper>
  );
}

const MatchWrapper = styled.div`
  margin-top: 25px;
`;

const MatchContainer = styled.div`
  display: flex;
`;

const Right = styled.div`
  flex: 2;
  padding-top: 40px;
  overflow: hidden;
`;
