import React from "react";
import styled from "styled-components";

export default function ShareModal({ nickname, setShareModal }) {
  const handleShareUrl = () => {
    let textArea = document.createElement("textarea");
    let link = `https://wanted-codestates-project-9-guno517.netlify.app/user/${nickname}`;

    document.body.appendChild(textArea);
    textArea.value = link;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert(`URL이 복사되었습니다!`);
  };

  return (
    <Modal>
      <ModalHeader>
        <HeadText>공유하기</HeadText>
        <CloseBtn onClick={() => setShareModal(false)}>X</CloseBtn>
      </ModalHeader>
      <ShareContent>
        <Facebook>
          <IconImg
            src="https://tmi.nexon.com/img/assets/icon_fb.svg"
            alt="facebook"
          />
          <IconName>페이스북</IconName>
        </Facebook>
        <Url onClick={handleShareUrl}>
          <IconImg
            src="https://tmi.nexon.com/img/assets/icon_url.svg"
            alt="url"
          />
          <IconName>URL 복사</IconName>
        </Url>
      </ShareContent>
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  width: 160px;
  top: 60px;
  left: 200px;
  z-index: 100;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgb(0 0 0 / 10%);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #e7e7e7;
`;

const HeadText = styled.p`
  font-weight: 400;
`;

const ShareContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const IconImg = styled.img`
  width: 40px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Facebook = styled.div`
  text-align: center;
`;

const Url = styled.div`
  text-align: center;
`;

const IconName = styled.p`
  font-size: 13px;
  font-weight: 300;
`;

const CloseBtn = styled.div``;
