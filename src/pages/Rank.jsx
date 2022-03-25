import React, { useState } from "react";
import { useQuery } from "react-query";
import { rankData } from "api";
import Loading from "components/Loading";
import styled from "styled-components";
import RankHead from "components/Ranking/RankHead";
import RankThree from "components/Ranking/RankThree";
import ModalContents from "components/Ranking/ModalContents";
import RankingListItem from "components/Ranking/RankingListItem";

export default function Rank() {
  const matchType =
    "7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a";
  const [dataState, setDataState] = useState("indi");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const showModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const { data } = useQuery([matchType], () => rankData(matchType), {
    staleTime: 60 * 1000,
  });

  if (!data) {
    return <Loading />;
  }

  return (
    <RankWrapper>
      <ModalContents openModal={isOpenModal} setOpenModal={setIsOpenModal} />
      {/* <button onClick={getGameData}>테스트1</button> */}
      {/* <button onClick={test}>테스트2</button> */}
      <RankTop>
        <RankHead
          dataState={dataState}
          setDataState={setDataState}
          showModal={showModal}
        />
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
            <RankingListItem />
          </Ul>
        </RankList>
      </RankListWrapper>
    </RankWrapper>
  );
}

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

  @media screen and (max-width: 1200px) {
    margin: 0;
    padding: 0;
  }
`;

const RankMiddle = styled.div`
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    margin: 0;
  }
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
