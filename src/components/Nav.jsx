import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavContainer>
      <NavWrapper>
        <NavTab>
          <TabList>
            <TabItem>홈</TabItem>
            <TabItem>랭킹</TabItem>
            <TabItem>카트</TabItem>
            <TabItem>트랙</TabItem>
          </TabList>
        </NavTab>
        <NavSearch>
          <SearchBar placeholder="닉네임 검색" />
        </NavSearch>
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  background-color: #005fcc;
`;

const NavWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  margin: 0 auto;
`;

const NavTab = styled.div``;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  align-items: center;
`;

const TabItem = styled.li`
  margin: 0 20px;
  color: white;
  box-sizing: border-box;
  height: 3rem;
  opacity: 0.5;
  transition: 0.3s ease;
  padding: 10px;

  &:hover {
    opacity: 1;
  }

  &:after {
    display: block;
    content: "";
    transform: scaleX(0);
    padding-bottom: 18px;
  }
  &:hover::after {
    opacity: 1;
    border-bottom: 5px solid white;
    transform: scaleX(1);
    transform-origin: 0% 50%;
    transition: transform 250ms ease-in-out;
    bottom: 0;
  }
`;

const NavSearch = styled.div``;

const SearchBar = styled.input`
  width: 195px;
  height: 32px;
  padding-left: 10px;
  padding-right: 25px;
  margin-right: 25px;
  font-size: 12px;
  background-color: transparent;
  outline: 0;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  opacity: 0.5;
  transition: 0.3s ease;

  &::placeholder {
    color: white;
  }
  &:hover {
    opacity: 1;
  }
  :focus {
    opacity: 1;
  }
`;
