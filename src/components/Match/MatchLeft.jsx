import React from "react";
import styled from "styled-components";
import RecordGraph from "./RecordGraph";

export default function MatchLeft({
  sortedTrackData,
  recordState,
  setRecordState,
}) {
  const onClickTrackTab = () => {
    setRecordState("트랙");
  };
  const onClickKartTab = () => {
    setRecordState("카트");
  };
  const playTime = (match) => {
    if (match === "") {
      return "";
    } else {
      let sec = Math.floor(match / 1000);
      let mil = match.substring(match.length - 3).slice(0, 2);
      let minute = Math.floor(sec / 60);
      let seconds = sec % 60;
      return `${minute}'${seconds.toString().padStart(2, 0)}'${mil}`;
    }
  };

  const trackData = sortedTrackData.map((time) => time.records);
  const sendData = trackData.map((time) =>
    time.map((record) => playTime(record.toString()))
  );
  return (
    <Left>
      <TabBtn>
        <TabList>
          <TabItem>
            <Tab
              className={recordState === "트랙" ? "active" : ""}
              onClick={onClickTrackTab}
            >
              트랙
            </Tab>
          </TabItem>
          <TabItem>
            <Tab
              className={recordState === "카트" ? "active" : ""}
              onClick={onClickKartTab}
            >
              카트
            </Tab>
          </TabItem>
        </TabList>
      </TabBtn>
      <TabTable style={{ maxWidth: "400px" }}>
        <TableTItle>
          <div>
            <span>{recordState}</span>전적
          </div>
          <div>평균 상위 8.21%</div>
        </TableTItle>
        {recordState === "트랙" ? (
          <ChartTable>
            <RecordGraph sendData={sendData} />
            <RecordTable>
              <Record>
                <Thead>
                  <tr>
                    <th>선택</th>
                    <th className="track">트랙</th>
                    <th>횟수</th>
                    <th>승률</th>
                    <th>기록</th>
                    <th>상위</th>
                  </tr>
                </Thead>
                <tbody>
                  {sortedTrackData &&
                    sortedTrackData.map((game) => {
                      return (
                        <tr key={game.id}>
                          <td>
                            <input type={"radio"} />
                          </td>
                          <td>{game.trackN}</td>
                          <td>{game.count}</td>
                          <td>{Math.round((game.win / game.count) * 100)}%</td>
                          <td>{playTime(game.bestRecord.toString())}</td>
                          <td>%</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Record>
            </RecordTable>
          </ChartTable>
        ) : (
          <ChartTable>
            {/* <RecordGraph sendData={sendData} /> */}
            <RecordTable>
              <Record>
                <Thead>
                  <tr>
                    <th>선택</th>
                    <th className="track">카트</th>
                    <th>횟수</th>
                    <th>승률</th>
                    <th>리타율</th>
                  </tr>
                </Thead>
                <tbody>
                  {/* {sortedTrackData &&
                    sortedTrackData.map((game) => {
                      return (
                        <tr key={game.id}>
                          <td>
                            <input type={"radio"} />
                          </td>
                          <td>{game.trackN}</td>
                          <td>{game.count}</td>
                          <td>{Math.round((game.win / game.count) * 100)}%</td>
                          <td>{playTime(game.bestRecord.toString())}</td>
                          <td>%</td>
                        </tr>
                      );
                    })} */}
                  <tr>
                    <td>
                      <input type={"radio"} />
                    </td>
                    <td>몬스터 X LE</td>
                    <td>195</td>
                    <td>34%</td>
                    <td>8%</td>
                  </tr>
                </tbody>
              </Record>
            </RecordTable>
          </ChartTable>
        )}
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

  & th {
    width: 45px;
  }

  & .track {
    width: 200px;
  }

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
