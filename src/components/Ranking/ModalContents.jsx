import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function ModalContents({ openModal, setOpenModal }) {
  const modalRef = useRef();

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && openModal) {
        setOpenModal(false);
      }
    },
    [openModal, setOpenModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {openModal ? (
        <ModalBackground onClick={() => setOpenModal(false)} ref={modalRef}>
          <Wrapper>
            <ImgWrapper>
              <CloseBtn onClick={() => setOpenModal(false)}>X</CloseBtn>
              <img
                src={"https://tmi.nexon.com/img/assets/guide_desc.png"}
                alt="guide"
              />
              <img
                src={"https://tmi.nexon.com/img/assets/guide_bubble.png"}
                alt="bubble"
                className="bubble"
              />
              <img
                src={"https://tmi.nexon.com/img/assets/guide_gg.png"}
                alt="gg"
                className="gg"
              />
              <img
                src={"https://tmi.nexon.com/img/assets/guide_dao.png"}
                alt="dao"
                className="dao"
              />
              <img
                src={"https://tmi.nexon.com/img/assets/guide_bazzie.png"}
                alt="bazzie"
                className="bazzie"
              />
            </ImgWrapper>
          </Wrapper>
        </ModalBackground>
      ) : null}
    </>
  );
}

const opacityAction = keyframes`
  0&{
    opacity: 0
  }
  100%{
    opacity:1
  }
`;

const daoAction = keyframes`
  0%{
    top: 50px;
    opacity: 0;
  }
  50%{
    top: 100px;
  }
  100%{
    top:70px
    opacity:1;
  }
`;

const bazzieAction = keyframes`
  0%{
    top: 165px;
    opacity:0;
  }
  50%{
    top: 130px;
  }
  100%{
    top:154px
    opacity:1;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease;
`;

const Wrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 827px;
  height: 653px;
  margin: 0 auto;
  background-color: transparent;
  -webkit-box-shadow: 10px 10px 10px rgb(0 0 0 / 10%);
  box-shadow: 10px 10px 10px rgb(0 0 0 / 10%);
  z-index: 10;

  & .bubble {
    position: absolute;
    top: 52px;
    right: 157px;
    opacity: 0;
    animation: ${opacityAction} 0.7s ease;
    animation-fill-mode: forwards;
  }

  & .gg {
    position: absolute;
    top: 35px;
    right: 99px;
    opacity: 0;
    animation: ${opacityAction} 0.7s ease;
    animation-fill-mode: forwards;
  }

  & .dao {
    position: absolute;
    top: 71px;
    right: -31px;
    opacity: 1;
    animation: ${daoAction} 0.7s ease;
    animation-fill-mode: forwards;
  }
  & .bazzie {
    position: absolute;
    top: 154px;
    right: 176px;
    opacity: 1;
    animation: ${bazzieAction} 0.7s ease;
    /* animation-fill-mode: forwards; */
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 34px;
`;
