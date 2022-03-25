import React from "react";
import styled from "styled-components";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { HiUser, HiUserGroup } from "react-icons/hi";
import { MdRefresh } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";
import { GiShare } from "react-icons/gi";
import { BiCalculator } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { keyframes } from "styled-components";

export default function UserInfoCard({
  dataState,
  setDataState,
  nickname,
  character,
}) {
  const currentUrl = window.location.href;
  const onClickIndi = () => {
    setDataState("indi");
  };
  const onClickTeam = () => {
    setDataState("team");
  };

  return (
    <ProfileWrapper>
      <ApiInfo>
        <BsFillInfoCircleFill style={{ marginRight: "5px" }} />
        <ApiInfoText>
          카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
        </ApiInfoText>
      </ApiInfo>
      <UserInfo>
        <UserCharacter>
          <UserImgWrapper>
            <img
              src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${character}.png`}
              alt="character"
              height={"100%"}
              width={"100%"}
            />
          </UserImgWrapper>
        </UserCharacter>
        <UserNameWrapper>
          <UserName>{nickname}</UserName>
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
          <UserActionWrapper>
            <UserReset>
              <MdRefresh size={16} />
              전적갱신
            </UserReset>
            <UserReport>
              <AiFillBell size={16} />
              신고하기
            </UserReport>
            <UserShare>
              <GiShare size={16} />
              공유하기
            </UserShare>
          </UserActionWrapper>
        </UserNameWrapper>
        <PageViewWrapper>
          <PageView>
            <div>
              <FaEye size={16} />
            </div>
            <div>페이지 뷰</div>
          </PageView>
          <div>1200</div>
        </PageViewWrapper>
      </UserInfo>
      <VirtualFight>
        <div>{`1대1 매칭 시뮬레이터 - '${nickname}' 와 가상 대결을 펼쳐보세요.`}</div>
        <div className="match">
          <BiCalculator size={16} />
          매칭하기
        </div>
      </VirtualFight>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div``;

const ApiInfo = styled.div`
  display: flex;
  margin: 15px 5px;
`;

const ApiInfoText = styled.div`
  font-size: 12px;
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.3fr;
  width: 100%;
  height: 175px;
  background-image: url(https://tmi.nexon.com/img/background_flag_w.png);
  background-size: 100% 175px;
  align-items: center;
  border-left: 3px solid #07f;
`;

const UserCharacter = styled.div``;

const UserImgWrapper = styled.div`
  width: 164px;
  height: 123px;
`;

const UserNameWrapper = styled.div``;

const UserName = styled.div`
  font-size: 45px;
`;

const UserTeamWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  padding-right: 15px;
  color: #07f;

  & .active {
    background: #07f;
    color: white;

    & svg {
      color: white;
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
    border-color: #07f;
  }

  & svg {
    color: #07f;
    vertical-align: text-bottom;
    margin-right: 2px;
  }

  & span:hover {
    background: #07f;
    color: white;

    & svg {
      color: white;
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

const UserActionWrapper = styled.div`
  display: inline-block;
  padding-left: 15px;
  & span {
    vertical-align: middle;
    display: inline-block;
    margin-top: 20px;
    margin-right: 10px;
    width: 82px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    border: 0.7px solid #1f334a;
    border-radius: 15px;
    cursor: pointer;
  }

  & svg {
    vertical-align: text-bottom;
    margin-right: 2px;
  }
`;

const UserReset = styled.span``;

const UserReport = styled.span``;

const UserShare = styled.span``;

const PageViewWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  color: #6c7a89;
`;

const PageView = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 14px;
  text-align: center;

  & svg {
    margin-right: 4px;
    line-height: 2;
  }
`;

const gradientBG = keyframes`
  0%, 100%{
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const VirtualFight = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 45px;
  line-height: 45px;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientBG} 20s ease infinite;
  color: #fff;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;

  & .match {
    position: absolute;
    vertical-align: middle;
    display: inline-block;
    top: 0;
    right: 0;
    margin-top: 8.5px;
    margin-right: 20px;
    width: 82px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    border: 0.7px solid #fff;
    border-radius: 15px;

    & svg {
      vertical-align: text-bottom;
      margin-right: 2px;
    }
  }
`;
