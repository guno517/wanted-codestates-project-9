import React from "react";
import styled from "styled-components";
import RecordGraph from "./RecordGraph";

export default function MatchLeft() {
  return (
    <Left>
      <TabBtn>
        <TabList>
          <TabItem>
            <Tab className="active">트랙</Tab>
          </TabItem>
          <TabItem>
            <Tab>카트</Tab>
          </TabItem>
        </TabList>
      </TabBtn>
      <TabTable style={{ maxWidth: "400px" }}>
        <TableTItle>
          <div>
            <span>트랙</span>전적
          </div>
          <div>평균 상위 8.21%</div>
        </TableTItle>
        <ChartTable>
          <RecordGraph />
          <RecordTable>
            <Record>
              <Thead>
                <tr>
                  <th>선택</th>
                  <th>트랙</th>
                  <th>횟수</th>
                  <th>승률</th>
                  <th>기록</th>
                  <th>상위</th>
                </tr>
              </Thead>
              <tbody>
                <tr>
                  <td>
                    <input type={"radio"} />
                  </td>
                  <td>차이나 서안 병마용</td>
                  <td>11</td>
                  <td>9%</td>
                  <td>1'48'49</td>
                  <td>9%</td>
                </tr>
              </tbody>
            </Record>
          </RecordTable>
        </ChartTable>
      </TabTable>
    </Left>
  );
}

const Left = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const TabBtn = styled.div``;

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TabItem = styled.li`
  float: left;
`;

const Tab = styled.div`
  width: 116px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 14px;
  border-bottom: 2px solid #ebebeb;
  background-color: lightgray;
  &.active {
    background-color: white;
    border-bottom: 2px solid #07f;
    color: #07f;
  }
`;

const TabTable = styled.div`
  width: 500px;
  margin-bottom: 10px;
  border: 1px solid #f2f2f2;
  background-color: white;
`;

const TableTItle = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 8px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #1f334a;
  vertical-align: middle;

  & span {
    margin-right: 5px;
    font-size: 14px;
    color: #07f;
  }
`;

const ChartTable = styled.div`
  border-top: 1px solid #ccc;
  margin: 0 25px;
  padding: 15px 0;
`;

const RecordTable = styled.div`
  overflow-y: auto;
  height: 235px;
  text-align: center;
  border-top: 1px solid #f2f2f2;
  font-weight: 400;
`;

const Record = styled.table`
  box-sizing: border-box;
  width: calc(100% - 1px);
  font-size: 13px;
  line-height: 35px;
`;

const Thead = styled.thead`
  background-color: #e9e9e9;

  & th:after {
    content: "";
    position: absolute;
    top: 10px;
    right: 0;
    display: inline-block;
    width: 1px;
    height: 15px;
    background-color: #ccc;
  }
`;
