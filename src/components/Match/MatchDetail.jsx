import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { detailMatch } from "api";
import { Link } from "react-router-dom";

export default function MatchDetail({ accountId, matchId }) {
  const { data } = useQuery([matchId], () => detailMatch(matchId), {
    staleTime: 60 * 1000,
  });
  if (!data) {
    return <div>loading...</div>;
  }

  data.map((detail) => {
    if (detail.matchRank === "99") {
      detail.matchRank = "리타이어";
    }
    if (detail.length < 8) {
    }
    return detail.matchRank;
  });

  const playTime = (time) => {
    if (time === "") {
      return "-";
    } else {
      let sec = Math.floor(time / 1000);
      let mil = time.substring(time.length - 3).slice(0, 2);
      let minute = Math.floor(sec / 60);
      let seconds = sec % 60;
      return `${minute}'${seconds.toString().padStart(2, 0)}'${
        Math.round(mil / 10) * 10
      }`;
    }
  };

  return (
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
        {data &&
          data.map((user) => {
            return (
              <MoreDataItem key={user.accountNo}>
                <MoreDataWrapper
                  className={user.accountNo === accountId ? "highlight" : ""}
                >
                  <MoreDataRank
                    rank={user.matchRank}
                    className={user.accountNo === accountId ? "highlight" : ""}
                  >
                    {user.matchRank}
                  </MoreDataRank>
                  <MoreDataKart>
                    <Img
                      className="kart"
                      alt="kart"
                      src={`http://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${user.kart}.png`}
                    />
                  </MoreDataKart>
                  <MoreDataNick>
                    <Link to={`/user/${user.characterName}`} className="link">
                      {user.characterName}
                    </Link>
                  </MoreDataNick>
                  <MoreDataTime>{playTime(user.matchTime)}</MoreDataTime>
                </MoreDataWrapper>
              </MoreDataItem>
            );
          })}
      </MoreDataList>
    </More>
  );
}

const More = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 177px;
  margin-top: -5px;
  margin-bottom: 5px;
  border-width: 1px 1px 1px 1px;
  border-color: #f2f2f2;
  border-style: solid;
`;

const MoreDataList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const MoreDataItem = styled.li`
  float: left;
  width: calc(100% / 9);

  & .highlight {
    background-color: #0077ff09;
  }
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

  color: ${(props) =>
    props.rank === "1" ? "#07f" : props.rank === "리타이어" ? "red" : "black"};
`;
const MoreDataKart = styled.div`
  height: 78px;
  line-height: 78px;
`;
const MoreDataNick = styled.div`
  height: 17px;
  line-height: 17px;
  width: 100%;
  font-size: 12px;

  & .link {
    text-decoration: none;
    color: black;
  }
`;
const MoreDataTime = styled.div`
  height: 42px;
  line-height: 42px;
`;

const Img = styled.img`
  width: 80%;
  height: 80%;
  object-fit: scale-down;
`;
