"use client";

import {
  Chart,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
} from "chart.js";
import { useEffect, useRef } from "react";

const ChartComponent = () => {
  const chartRef = useRef(null);

  Chart.register(LinearScale);
  Chart.register(BarController, BarElement);
  Chart.register(CategoryScale);


  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
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
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
