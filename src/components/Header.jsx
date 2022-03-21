import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderLogo>
            <img
              src={"https://tmi.nexon.com/img/assets/logo_kart.png"}
              alt="logo"
            />
          </HeaderLogo>
          <HeaderTmi>
            <img
              src={"https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg"}
              alt="TMI"
            />
          </HeaderTmi>
        </HeaderLeft>
        <HeaderRight>
          <a href="https://kart.nexon.com">카트라이더 홈페이지 바로가기</a>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0 5rem;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderLogo = styled.div``;

const HeaderTmi = styled.div`
  margin-left: 15px;
`;

const HeaderRight = styled.div`
  font-size: 14px;

  a {
    text-decoration: none;
    color: #6c7a89;
  }
`;
