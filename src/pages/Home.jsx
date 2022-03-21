import React from "react";
import styled from "styled-components";

export default function Home() {
  setTimeout(function () {}, 100);

  return (
    <MainHome>
      <MainMask></MainMask>
      <MainInner>
        <MainTitle>
          <Title>
            <div>넥슨 오픈API 기반</div>
            <div>카트라이더 전적 검색</div>
            <div>사회적 거리두기</div>
          </Title>
          <SearchForm className="active">
            <Form>
              <div>유저</div>
              <input type={"text"} placeholder="카트라이더 닉네임을 입력" />
              <button>TMI</button>
            </Form>
          </SearchForm>
        </MainTitle>
      </MainInner>
    </MainHome>
  );
}

const MainHome = styled.div`
  position: relative;
  text-align: center;
  background-image: url("https://tmi.nexon.com/img/main_bg1.png");
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  height: 50vh;
`;

const MainMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #005fcc;
  opacity: 0.3;
  height: 100%;
`;

const MainInner = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
  color: white;
`;

const MainTitle = styled.div`
  position: relative;
  height: 655px;
  z-index: 2;
`;

const Title = styled.div`
  padding-top: 150px;

  & div {
    font-size: 28px;
    font-weight: 400;

    &:nth-child(2) {
      font-size: 40px;
    }

    &:last-child {
      width: 280px;
      display: inline-block;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      font-size: 18px;
    }
  }
`;

const SearchForm = styled.div`
  position: absolute;
  width: 655px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;
  transition: width 0.5s;
  height: 67px;
  background: transparent;
  box-sizing: border-box;
  border-radius: 33px;
  border: 4px solid #fff;
  padding: 5px;
`;

const Form = styled.div`
  & div {
    position: absolute;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    top: 7px;
    width: 100px;
    height: 44px;
    line-height: 44px;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    background: transparent;
    z-index: -1;
    border-right: 1px solid #fff;
  }
  & input {
    padding: 0;
    height: 44px;
    width: 300px;
    outline: 0;
    border: 0;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    background: transparent;
    transition: opacity 0.5s;
  }

  & button {
    cursor: pointer;
    position: absolute;
    width: 100px;
    top: 7px;
    right: 0;
    height: 44px;
    line-height: 44px;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    background-color: transparent;
    border: none;
  }
`;
