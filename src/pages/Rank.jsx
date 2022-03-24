import React, { useState } from "react";
import { useQuery } from "react-query";
import { rankData } from "api";
import Loading from "components/Loading";
import styled from "styled-components";
import RankHead from "components/Ranking/RankHead";
import RankThree from "components/Ranking/RankThree";

export default function Rank() {
  const [matchType, setMatchType] = useState(
    "7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a"
  );
  const [dataState, setDataState] = useState("indi");

  const onClickIndi = () => {
    setDataState("indi");
  };
  const onClickTeam = () => {
    setDataState("team");
  };

  const { data } = useQuery([matchType], () => rankData(matchType), {
    staleTime: 60 * 1000,
  });

  if (!data) {
    return <Loading />;
  }

  return (
    <ContentWrapper>
      <RankWrapper>
        <RankTop>
          <RankHead dataState={dataState} setDataState={setDataState} />
          <RankMiddle>
            <RankThree data={data} />
          </RankMiddle>
        </RankTop>
        <RankListWrapper>
          <RankList>
            <Ul>
              <Li>
                <div className="head">
                  <span className="rank">#</span>
                  <span className="nick">닉네임 (순위변동)</span>
                  <span className="pts">누적포인트 (전일대비)</span>
                  <span className="cnt">주행횟수</span>
                  <span className="avg">평균순위</span>
                </div>
              </Li>
              <Li>
                <div className="listItem">
                  <span className="rank">4</span>
                  <span className="nick">1234Kcm</span>
                  <span className="pts">3,608 PT</span>
                  <span className="cnt">508회</span>
                  <span className="avg">2.3위</span>
                </div>
              </Li>
            </Ul>
          </RankList>
        </RankListWrapper>
      </RankWrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  background-color: transparent;
  min-width: 1000px;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
`;

const RankWrapper = styled.div`
  position: relative;
  padding-bottom: 200px;
  min-height: 800px;
`;

const RankTop = styled.div`
  position: absolute;
  width: 100%;
  height: 650px;
  background: #005fcc;
  overflow: hidden;
`;

const RankMiddle = styled.div`
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 1300px;
  margin: 0 5rem;
`;

const RankListWrapper = styled.div`
  position: relative;
  padding-top: 40px;
  width: 1000px;
  margin: 0 auto;
`;

const RankList = styled.div`
  margin-top: 550px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  position: relative;
  margin-bottom: 10px;

  & .head {
    padding-left: 60px;
    line-height: 40px;
    height: 40px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
  }

  & .listItem {
    background-color: white;
    padding-left: 60px;
    line-height: 40px;
    height: 40px;
    font-weight: 500;
    font-size: 16px;
  }

  & .rank {
    vertical-align: middle;
  }

  & .nick {
    position: absolute;
    left: 220px;
  }
  & .pts {
    display: inline-block;
    width: 120px;
    position: absolute;
    right: 260px;
  }

  & .cnt {
    position: absolute;
    right: 140px;
  }

  & .avg {
    position: absolute;
    right: 60px;
  }
`;
