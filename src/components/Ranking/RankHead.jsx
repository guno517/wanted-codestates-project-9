import React from "react";
import styled from "styled-components";
import { HiUser, HiUserGroup } from "react-icons/hi";

export default function RankHead({ dataState, setDataState, showModal }) {
  const onClickIndi = () => {
    setDataState("indi");
  };
  const onClickTeam = () => {
    setDataState("team");
  };

  return (
    <RankDesc>
      <p className="title">3월 TMI 랭킹</p>
      <Line></Line>
      <p className="date">
        <span>랭킹 산정기간</span>
        2022년 03월 01일 00:00:00&nbsp;&nbsp;~&nbsp;&nbsp;2022년 03월 31일
        24:00:00
      </p>
      <p className="date">
        <span>최근 업데이트</span>
        2022년 03월 24일 09:15:14
      </p>
      <GuideBtn onClick={showModal}>랭킹가이드</GuideBtn>
      <BtnList>
        <UserTeamWrapper>
          <UserIndi
            className={dataState === "indi" ? "active" : ""}
            onClick={onClickIndi}
          >
            <HiUser size={16} />
            개인전
          </UserIndi>
          <UserTeam
            className={dataState === "team" ? "active" : ""}
            onClick={onClickTeam}
          >
            <HiUserGroup size={16} />
            팀전
          </UserTeam>
        </UserTeamWrapper>
      </BtnList>
    </RankDesc>
  );
}

const RankDesc = styled.div`
  z-index: 5;
  width: 1300px;
  padding-top: 50px;
  margin: 0 auto;
  background-color: transparent;

  & .title {
    font-size: 22px;
    font-weight: 400;
    padding-left: 10px;
    margin-bottom: 10px;
    color: #fff;
  }

  & .date {
    font-size: 12px;
    font-weight: 400;
    padding-left: 10px;
    color: #fff;

    & span {
      font-weight: 500;
      margin-right: 5px;
    }
  }
`;

const Line = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 35px;
  height: 3px;
  background-color: #fff;
`;

const GuideBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 110px;
  right: 10rem;
  border: 1px solid #fff;
  color: #fff;
  background-color: #005fcc;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  z-index: 100;
  outline: 0;

  @media screen and (max-width: 1320px) {
    right: 165px;
  }

  @media screen and (max-width: 1200px) {
    right: 15px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const BtnList = styled.div``;

const UserTeamWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  padding-right: 15px;
  color: white;

  & .active {
    background: white;
    color: #07f;

    & svg {
      color: #07f;
    }
  }

  & span {
    vertical-align: middle;
    display: inline-block;
    margin-top: 20px;
    width: 100px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    border-style: solid;
    border-color: white;
  }

  & svg {
    color: white;
    vertical-align: text-bottom;
    margin-right: 2px;
  }

  & span:hover {
    background: white;
    color: #07f;

    & svg {
      color: #07f;
    }
  }

  &::after {
    content: "";
    position: relative;
    display: inline-block;
    top: 14px;
    left: 17px;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;

const UserIndi = styled.span`
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
`;

const UserTeam = styled.span`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
`;
