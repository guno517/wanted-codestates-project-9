import React from "react";
import styled from "styled-components";

export default function RankingListItem() {
  return (
    <Li>
      <div className="listItem">
        <span className="rank">4</span>
        <span className="nick">1234Kcm</span>
        <span className="pts">3,608 PT</span>
        <span className="cnt">508회</span>
        <span className="avg">2.3위</span>
      </div>
    </Li>
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
