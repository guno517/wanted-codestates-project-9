import React from "react";
import styled from "styled-components";

export default function Message({ nickname }) {
  const data = JSON.parse(localStorage.getItem(`${nickname}cheerup`));
  return (
    <MessageContainer>
      <MessageList>
        {data &&
          data.map((item, idx) => (
            <MessageItem key={idx}>
              <NickItem>{item.nick}</NickItem>
              <SpeechBubble>
                <p>{item.message}</p>
              </SpeechBubble>
            </MessageItem>
          ))}
      </MessageList>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  height: 159px;
`;

const MessageList = styled.ul`
  margin-left: 5px;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  height: 159px;
`;

const MessageItem = styled.li`
  display: flex;
  list-style: none;
  font-size: 13px;
`;

const NickItem = styled.div`
  display: inline-block;
  position: relative;
  padding: 10px;
  margin: 0.5em 0.5em 0.5em 0;
  color: #333;
  background: #fff;
`;

const SpeechBubble = styled.div`
  margin-left: 15px;

  -webkit-box-flex: 2.5;
  -ms-flex: 2.5;
  flex: 2.5;
  display: inline-block;
  position: relative;
  padding: 10px;
  margin: 0.5em 0.5em 0.5em 0;
  border: 1px solid #c3ced5;
  color: #333;
  border-radius: 15px;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    bottom: auto;
    left: -8px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent #c3ced5;
    display: block;
    width: 0;
  }

  & p {
    margin: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    bottom: auto;
    left: -7px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent #fff;
    display: block;
    width: 0;
  }
`;
