import React, { useState } from "react";
import styled from "styled-components";
import { GoTriangleDown } from "react-icons/go";

export default function MatchRight({ matchArr }) {
  // console.log(matchArr);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  function timeForToday(match) {
    const today = new Date();
    const timeValue = new Date(match.endTime);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    console.log(betweenTime);
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  const playTime = (match) => {
    if (match.playTime === "") {
      return "-";
    } else {
      let sec = Math.floor(match.playTime / 1000);
      let mil = match.playTime.substring(match.playTime.length - 3).slice(0, 2);
      let minute = Math.floor(sec / 60);
      let seconds = sec % 60;
      //${seconds.toString().padStart(2, 0)}
      return `${minute}'${seconds.toString().padStart(2, 0)}'${
        Math.round(mil / 10) * 10
      }`;
    }
  };
  matchArr.map((match) => {
    if (match.result === "") {
      match.result = "99";
    }
    return match.result;
  });
  return (
    <Right>
      {matchArr &&
        matchArr.map((match) => {
          return (
            <Matches key={match.matchId}>
              <Match result={match.result}>
                <MatchDay>{timeForToday(match)}</MatchDay>
                <MatchRank result={match.result}>
                  #{match.result === "99" || "" ? "리타이어" : match.result}
                  <span>
                    {match.result === "99" ? "" : `/${match.players}`}
                  </span>
                </MatchRank>
                <MatchPlace>{match.track.name}</MatchPlace>
                <MatchKart>{match.kart.name}</MatchKart>
                <MatchTime>{playTime(match)}</MatchTime>
                <MoreData onClick={handleOpenClick}>
                  <GoTriangleDown />
                </MoreData>
              </Match>
              {/* {isOpen && (
                <More>
                  <MoreDataList>
                    <MoreDataItem>
                      <MoreDataWrapper>
                        <MoreDataRank>#</MoreDataRank>
                        <MoreDataKart>카트</MoreDataKart>
                        <MoreDataNick>유저</MoreDataNick>
                        <MoreDataTime>기록</MoreDataTime>
                      </MoreDataWrapper>
                    </MoreDataItem>
                    <MoreDataItem>
                      <MoreDataWrapper>
                        <MoreDataRank>#</MoreDataRank>
                        <MoreDataKart>카트</MoreDataKart>
                        <MoreDataNick>유저</MoreDataNick>
                        <MoreDataTime>기록</MoreDataTime>
                      </MoreDataWrapper>
                    </MoreDataItem>
                  </MoreDataList>
                </More>
              )} */}
            </Matches>
          );
        })}
    </Right>
  );
}

const Right = styled.div`
  flex: 2;
  padding-top: 40px;
`;

const Matches = styled.section``;

const Match = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 5px;
  width: 100%;
  height: 88px;
  font-size: 16px;
  background-color: ${(props) =>
    props.result === "99"
      ? "rgba(246,36,89,0.09)"
      : props.result === "1"
      ? "#0077ff2b"
      : "white"};
  border-width: 1px 1px 1px 4px;
  border-color: ${(props) =>
    props.result === "99"
      ? "#f2f2f2 #f2f2f2 #f2f2f2 #f62459"
      : props.result === "1"
      ? "#f2f2f2 #f2f2f2 #f2f2f2 #07f"
      : "#f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1"};
  border-style: solid;
  align-items: center;
`;

const MatchDay = styled.div`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

const MatchRank = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
  text-align: left;
  /* color: #1f334a; */
  color: ${(props) =>
    props.result === "99" ? "red" : props.result === "1" ? "#07f" : "#1f334a"};
  opacity: ${(props) =>
    props.result === "99" ? "1" : props.result === "1" ? "1" : "0.5"};

  width: ${(props) => (props.result === "99" ? "" : "150px")};

  & span {
    margin-left: 5px;
    font-size: 16px;
  }
`;
const MatchPlace = styled.div`
  position: relative;
  font-weight: 400;
  text-align: center;
  width: 15rem;
`;
const MatchKart = styled.div`
  position: relative;
  font-weight: 400;
  text-align: center;
  width: ${(props) => (props.result === "99" ? "" : "150px")};
`;
const MatchTime = styled.div`
  font-weight: 500;
  text-align: center;
  width: ${(props) => (props.result === "99" ? "" : "50px")};
`;

const MoreData = styled.div`
  box-sizing: border-box;
  right: 0;
  width: 40px;
  height: 87px;
  line-height: 87px;
  font-weight: 400;
  text-align: center;
  border-left: 1px solid #ebebeb;
`;

const More = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 177px;
  margin-top: -5px;
  margin-bottom: 5px;
  border-width: 1px 1px 1px 1px;
  border-color: #f2f2f2;
  border-style: solid;
  background-color: white;
`;

const MoreDataList = styled.ul`
  list-style: none;
  margin: 0;
`;

const MoreDataItem = styled.li`
  float: left;
`;

const MoreDataWrapper = styled.div`
  text-align: center;
  font-weight: 400;
  background-color: white;
`;

const MoreDataRank = styled.div`
  height: 40px;
  line-height: 40px;
  background-color: #f2f2f2;
`;
const MoreDataKart = styled.div`
  height: 78px;
  line-height: 78px;
`;
const MoreDataNick = styled.div`
  height: 17px;
  line-height: 17px;
`;
const MoreDataTime = styled.div`
  height: 42px;
  line-height: 42px;
`;
