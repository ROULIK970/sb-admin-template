"use client"

import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

const ChartAreaComponent = () => {
  const chartRef = useRef(null);

  Chart.register(LineController, LineElement);
  Chart.register(PointElement);
  Chart.register(LinearScale);
  Chart.register(CategoryScale);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (ctx) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Data 1",
              data: [10, 20, 30, 40, 50, 60],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              fill: true,
            },
            {
              label: "Data 2",
              data: [20, 30, 40, 50, 60, 70],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartAreaComponent;

