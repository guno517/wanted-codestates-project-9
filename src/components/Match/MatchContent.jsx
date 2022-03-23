import React from "react";
import styled from "styled-components";
import MatchTab from "./MatchTab";
import MatchLeft from "./MatchLeft";
import MatchRight from "./MatchRight";

export default function MatchContent({ matchArr }) {
  return (
    <MatchWrapper>
      <MatchTab />
      <MatchContainer>
        <MatchLeft />
        <MatchRight matchArr={matchArr} />
      </MatchContainer>
    </MatchWrapper>
  );
}

const MatchWrapper = styled.div`
  margin-top: 25px;
`;

const MatchContainer = styled.div`
  display: flex;
`;
