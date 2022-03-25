import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Message from "./Message";

export default function Cheerup() {
  const { nickname } = useParams();
  const [cheerupData, setCheerupData] = useState({
    data: "",
    nick: "",
    message: "",
  });
  let size = 0;
  // if (JSON.parse(localStorage.getItem(`${nickname}cheerup`)).length !== null) {
  //   size = JSON.parse(localStorage.getItem(`${nickname}cheerup`)).length;
  // }
  const { nick, message } = cheerupData;

  const onChangeNick = (e) => {
    setCheerupData({
      ...cheerupData,
      nick: e.target.value,
    });
  };
  const onChangeMsg = (e) => {
    setCheerupData({
      ...cheerupData,
      message: e.target.value,
    });
  };
  const saveMessage = () => {
    const container =
      JSON.parse(localStorage.getItem(`${nickname}cheerup`)) || [];
    container.push(cheerupData);
    localStorage.setItem(`${nickname}cheerup`, JSON.stringify(container));
    setCheerupData({ nick: "", message: "" });
  };
  // function getNowTime24() {
  //   let NOW_DATE = new Date();

  //   const UTC = NOW_DATE.getTime() + NOW_DATE.getTimezoneOffset() * 60 * 1000;

  //   const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  //   const KR_DATE = new Date(UTC + KR_TIME_DIFF);

  //   let YYYY = KR_DATE.getFullYear();
  //   let MM = ("00" + (KR_DATE.getMonth() + 1)).slice(-2);
  //   let DD = ("00" + KR_DATE.getDate()).slice(-2);

  //   let return_format = YYYY + "-" + MM + "-" + DD;
  //   return return_format;
  // }
  return (
    <CheerupWrapper>
      <CheerupTitle>
        <div>
          <span>응원 </span>한마디
        </div>
        <div>오늘 0개 전체 {size}개</div>
      </CheerupTitle>
      <Message nickname={nickname} />
      <CheerupBottom>
        <MessageForm>
          <NickInput
            type={"text"}
            placeholder={"닉네임"}
            value={nick}
            maxLength={"5"}
            onChange={onChangeNick}
          />
          <MessageInput
            type={"text"}
            placeholder={"최대 30자"}
            value={message}
            maxLength={"30"}
            onChange={onChangeMsg}
          />
          <MessageBtn
            onClick={saveMessage}
            disabled={nick.length <= 1 || message.length <= 1}
          >
            남기기
          </MessageBtn>
        </MessageForm>
      </CheerupBottom>
    </CheerupWrapper>
  );
}

const CheerupWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;

const CheerupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 12px;
  padding: 0 8px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;

  & span {
    color: #07f;
  }
`;

const CheerupBottom = styled.div`
  margin: 8px;
  padding: 8px;
  border-top: 1px solid #f2f2f2;
  line-height: 30px;
`;

const MessageForm = styled.div`
  display: flex;
  height: 30px;
  vertical-align: middle;
`;

const NickInput = styled.input`
  margin-right: 5px;
  width: 15%;
  border: none;
  border-bottom: 1px solid #ccc;

  &:focus {
    outline: none;
    border-bottom: 1px solid #07f;
  }
`;

const MessageInput = styled.input`
  margin-right: 5px;
  width: 60%;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 12px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #07f;
  }
`;

const MessageBtn = styled.button`
  cursor: pointer;
  border: 1px solid #07f;
  background-color: white;
  color: #07f;
  border-radius: 5px;
  &:hover {
    background-color: #07f;
    color: white;
  }
  &:disabled {
    border: 1px solid #ccc;
    background-color: #ccc;
    color: white;
    border-radius: 5px;
  }
`;
