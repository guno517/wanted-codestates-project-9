import React from "react";
import styled from "styled-components";

export default function MatchTab({ tabState, setTabState }) {
  const onClickAll = () => {
    setTabState("all");
  };
  const onClickFast = () => {
    setTabState("fast");
  };
  const onClickBoost = () => {
    setTabState("boost");
  };

  return (
    <Tab>
      <TabList>
        <TabItem
          className={tabState === "all" ? "active" : ""}
          onClick={onClickAll}
        >
          통합
        </TabItem>
        <TabItem
          className={tabState === "fast" ? "active" : ""}
          onClick={onClickFast}
        >
          매우빠름
        </TabItem>
        <TabItem
          className={tabState === "boost" ? "active" : ""}
          onClick={onClickBoost}
        >
          무한부스터
        </TabItem>
      </TabList>
      <div style={{ display: "flex" }}>
        <TabRetire>리타이어 노출</TabRetire>
        <ToggleWrapper>
          <ToggleCheckBox type="checkbox" />
          <ToggleLabel />
        </ToggleWrapper>
      </div>
    </Tab>
  );
}

const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin: 25px 0;
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TabItem = styled.li`
  cursor: pointer;
  float: left;
  width: 81px;
  height: 35px;
  font-size: 14px;
  text-align: center;
  position: relative;
  color: #a1a1a1;

  &.active {
    color: #07f;
    &:after {
      position: absolute;
      content: " ";
      display: block;
      width: 100%;
      bottom: -1px;
      height: 3px;
      background-color: #07f;
      border: none;
      opacity: 1;
    }
  }
`;

const TabRetire = styled.span`
  height: 35px;
  font-size: 14px;
  text-align: center;
  position: relative;
`;
const ToggleWrapper = styled.label`
  margin-left: 5px;
`;

const ToggleCheckBox = styled.input`
  display: none;
  &:checked + span {
    &:before {
      transform: translate(-50%, 50%) scale(2);
    }
    &:after {
      transform: translateX(13px); // 원 이동
    }
  }
`;

const ToggleLabel = styled.span`
  position: relative;
  background-color: lightgray;
  display: block;
  width: 34px;
  height: 19px;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: red;
    transform: translate(-100%, 0%) scale(1);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 5px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    transition: transform 0.4s;
    background-color: white;
  }
`;
