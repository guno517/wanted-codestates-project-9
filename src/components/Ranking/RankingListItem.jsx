import React from "react";
import styled from "styled-components";

export default function RankingListItem() {
  return (
    <>
      <Li>
        <div className="listItem">
          <span className="rank">4</span>
          <span className="nick">1234Kcm</span>
          <span className="pts">3,608 PT</span>
          <span className="cnt">508회</span>
          <span className="avg">2.3위</span>
        </div>
      </Li>
      <Li>
        <div className="listItem">
          <span className="rank">5</span>
          <span className="nick">엘린왕눈</span>
          <span className="pts">3,287 PT</span>
          <span className="cnt">340회</span>
          <span className="avg">1.1위</span>
        </div>
      </Li>
      <Li>
        <div className="listItem">
          <span className="rank">6</span>
          <span className="nick">동현이댜</span>
          <span className="pts">2,892 PT</span>
          <span className="cnt">338회</span>
          <span className="avg">1.6위</span>
        </div>
      </Li>
      <Li>
        <div className="listItem">
          <span className="rank">7</span>
          <span className="nick">Yello클마o</span>
          <span className="pts">2,816 PT</span>
          <span className="cnt">319회</span>
          <span className="avg">1.5위</span>
        </div>
      </Li>
    </>
  );
}

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
