import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function RecordGraph({ sendData }) {
  // const labelArr = sendData[0].map((time) => time);
  const data = {
    // labels: labelArr,
    labels: [
      "2'04",
      "2'10",
      "2'16",
      "2'22",
      "2'28",
      "2'34",
      "2'40",
      "2'46",
      "2'52",
      "2'58",
    ],
    datasets: [
      {
        label: "라이더비율",
        fill: "start",
        backgroundColor: "#07f",
        borderColor: "#07f",
        borderWidth: 1,
        pointRadius: 2,
        data: [0.03, 0.58, 1.14, 4.02, 2.97, 2.08, 1.53, 1.38, 1.12, 0.66],
      },
    ],
  };

  let options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: {
        ticks: {
          display: true,
        },
      },
      yAxes: {
        ticks: { reverse: true },
      },
    },
  };
  return (
    <div style={{ maxWidth: "400px" }}>
      <Line
        data={data}
        options={options}
        style={{ maxWidth: "100%", maxHeight: "180px" }}
      />
    </div>
  );
}
