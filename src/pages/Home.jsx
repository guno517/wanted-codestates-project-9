import React from "react";
import styled, { keyframes } from "styled-components";

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
          <img
            src="https://tmi.nexon.com/img/assets/covid_left.png"
            alt="left"
            className="left"
          />
          <span className="left-back"></span>
          <img
            src="https://tmi.nexon.com/img/assets/covid_right.png"
            alt="right"
            className="right"
          />
          <span className="right-back"></span>
        </MainTitle>
      </MainInner>
    </MainHome>
  );
}

const showTitle = keyframes`
  0%{
    opacity: 0
  }
  100%{
    opacity: 1
  }
`;

const wide = keyframes`
  0% {
    width: 110px
  }

  100% {
    width: 655px
  }
`;

const show = keyframes`
  0% {
    opacity: 0,
    padding-top: 200px
  }
  100%{
    opacity: 1,
    padding-top: 150px
  }
`;

const showLeft = keyframes`
  0%{
    left: -500px
  }
  100%{
    left: -100px;
  }
`;
const showRight = keyframes`
  0%{
    right:-500px
  }
  100%{
    right: -100px
  }
`;

const showLeftBack = keyframes`
  0%{
    left: -500px
  }
  100% {
    left: -200px
  }
`;
const showRightBack = keyframes`
  0%{
    right: -500px
  }
  100% {
    right: -200px
  }
`;

const MainHome = styled.div`
  position: relative;
  text-align: center;
  background-image: url("https://tmi.nexon.com/img/main_bg1.png");
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  height: 60vh;
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

  & .left {
    position: absolute;
    width: 350px;
    top: 20%;
    animation: ${showLeft} 1s ease;
    animation-fill-mode: forwards;
  }

  & .right {
    position: absolute;
    width: 350px;
    top: 20%;
    animation: ${showRight} 1s ease;
    animation-fill-mode: forwards;
  }

  & .left-back {
    position: absolute;
    width: 447px;
    height: 296px;
    top: 150px;
    z-index: 87;
    left: -200px;
    background-image: url(https://tmi.nexon.com/img/main_left_bg.png);
    background-size: cover;
    background-position: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    animation: ${showLeftBack} 1s ease;
    animation-fill-mode: forwards;
  }

  & .right-back {
    position: absolute;
    width: 527px;
    height: 317px;
    top: 120px;
    right: -200px;
    z-index: 87;
    background-image: url(https://tmi.nexon.com/img/main_right_bg.png);
    background-size: cover;
    background-position: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    animation: ${showRightBack} 1s ease;
    animation-fill-mode: forwards;
  }
`;

const Title = styled.div`
  padding-top: 150px;

  animation: ${showTitle} 1s ease;
  animation-fill-mode: forwards;

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
  animation: ${wide} 1s ease;
  animation-fill-mode: forwards;
  /* &.active {
    width: 655px;
  } */
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
    animation: ${show} 1s ease-in;
    animation-fill-mode: forwards;
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
