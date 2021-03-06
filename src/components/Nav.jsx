import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Nav() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [nick, setNick] = useState("");
  const TabArr = [
    { id: 1, title: "홈", link: "/" },
    { id: 2, title: "랭킹", link: "/rank" },
    { id: 3, title: "카트", link: "/kart" },
    { id: 4, title: "트랙", link: "/track" },
  ];

  const handleClickTab = (id) => {
    setSelectedTab(id);
  };

  const onChangeNick = (e) => {
    setNick(e.target.value);
  };

  const onClickSearch = () => {
    setNick("");
  };

  return (
    <NavContainer>
      <NavWrapper>
        <NavTab>
          <TabList>
            {TabArr.map((item) => {
              return (
                <Link
                  to={`${item.link}`}
                  key={item.id}
                  style={{ textDecoration: "none" }}
                >
                  <TabItem
                    onClick={() => handleClickTab(item.id)}
                    className={selectedTab === item.id ? "selected" : "none"}
                  >
                    {item.title}
                  </TabItem>
                </Link>
              );
            })}
          </TabList>
        </NavTab>
        <NavSearch>
          <SearchBar placeholder="닉네임 검색" onChange={onChangeNick} />
          <Link to={`/user/${nick}`} onClick={onClickSearch}>
            <span>
              <BiSearch color="white" size={20} />
            </span>
          </Link>
        </NavSearch>
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  background-color: #005fcc;
  margin: 0 atuo;
`;

const NavWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  align-items: center;
  margin: 0 10rem;
  min-width: 1000px;

  @media screen and (max-width: 1300px) {
    margin: 0;
  }
`;

const NavTab = styled.div``;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  align-items: center;
`;

const TabItem = styled.li`
  cursor: pointer;
  margin: 0 5px;
  color: white;
  box-sizing: border-box;
  height: 3rem;
  opacity: 0.5;
  transition: 0.3s ease;
  padding: 10px;
  text-align: center;

  &.selected {
    opacity: 1;
    &:after {
      opacity: 1;
      border-bottom: 5px solid white;
      transform: scaleX(1);
      transform-origin: 0% 50%;
      transition: transform 250ms ease-in-out;
      bottom: 0;
    }
  }

  &:hover {
    opacity: 1;
  }

  &:after {
    display: block;
    content: "";
    transform: scaleX(0);
    padding-bottom: 18px;
    width: 60px;
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

const NavSearch = styled.div`
  & span {
    position: relative;
    opacity: 0.5;
    top: 8px;
    right: 20px;
    cursor: pointer;

    @media screen and (max-width: 1000px) {
      display: none;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

const SearchBar = styled.input`
  width: 195px;
  height: 32px;
  padding-left: 10px;
  padding-right: 25px;
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
