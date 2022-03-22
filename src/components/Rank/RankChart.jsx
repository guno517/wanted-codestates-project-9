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
export default function RankChart({ recentRank }) {
  const dataArr = recentRank;
  const labelArr = recentRank.map((game, idx) => `이전 ${idx + 1}경기`);
  const data = {
    labels: labelArr,
    datasets: [
      {
        label: "순위",
        fill: false,
        borderColor: "#07f",
        borderWidth: 1,
        pointRadius: 2,
        data: dataArr,
      },
    ],
  };

  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        reverse: true,
      },
      yAxes: {
        reverse: true,
      },
    },
  };
  return (
    <div>
      <Line
        data={data}
        options={options}
        style={{ maxWidth: "100%", maxHeight: "180px" }}
      />
    </div>
  );
}
