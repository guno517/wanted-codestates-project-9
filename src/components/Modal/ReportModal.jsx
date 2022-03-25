import React from "react";
import styled from "styled-components";

export default function ReportModal({ reportModal, setReportModal }) {
  return (
    <>
      {reportModal ? (
        <ModalBackground>
          <Wrapper>
            <Modal>
              <Head>유저신고</Head>
              <Text>해당 유저를 신고하시겠습니까?</Text>
              <Text>신고하시려면 사유를 입력해주세요.</Text>
              <TextArea />
              <BtnWrapper>
                <Btn onClick={() => setReportModal(false)}>아니요</Btn>
                <Btn onClick={() => alert("신고가 되었습니다.")}>네</Btn>
              </BtnWrapper>
            </Modal>
          </Wrapper>
        </ModalBackground>
      ) : null}
    </>
  );
}

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

const Modal = styled.div`
  position: relative;
  width: 300px;
  height: 270px;
  margin: 0 auto;
  background-color: white;
  padding: 25px 25px;
  border-bottom: 3px solid #07f;
  box-shadow: 10px 10px 10px rgb(0 0 0 / 10%);
`;
const Head = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;
const TextArea = styled.textarea`
  margin-top: 20px;
  height: 100px;
  width: 300px;
  margin-bottom: 20px;
  resize: none;
`;
const BtnWrapper = styled.div`
  float: right;
  margin-top: 15px;
`;
const Btn = styled.button`
  margin-left: 5px;
  width: 50px;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  border: 0;
  outline: 0;
  background-color: #07f;
  color: #fff;
  :hover {
    background-color: #024086;
  }
`;
