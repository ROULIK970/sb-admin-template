"use client";

import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import Link from 'next/link';
import ChartAreaComponent from "../app/Components/chart-area.jsx";
import ChartBarComponent from "../app/Components/chart-bar.jsx";
import Footer from '../app/Components/footer.jsx'
import Nav from "../app/Components/nav.jsx";
import {
  Chart,
  CategoryScale,
  Title,
  Tooltip,
  ArcElement,
  PieController,
} from "chart.js";

const PieChartComponent = () => {
  const chartRef = useRef(null);

  Chart.register(PieController);
  Chart.register(CategoryScale, Title, Tooltip, ArcElement);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (ctx) {
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              data: [10, 20, 30],
              backgroundColor: ["red", "blue", "yellow"],
              borderColor: "transparent",
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Pie Chart",
            },
            tooltip: {
              callbacks: {
                label: (context) =>
                  `${context.label}: ${context.parsed.toFixed(2)}%`,
              },
            },
          },
        },
      });
    }
  }, []);

  return <canvas ref={chartRef} />;
};

const charts = () => {
  return (
    <div className="sb-nav-fixed">
      <Nav />
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Charts</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <Link href="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Charts</li>
              </ol>
              <div className="card mb-4">
                <div className="card-body">
                  Chart.js is a third party plugin that is used to generate the
                  charts in this template. The charts below have been customized
                  - for further customization options, please visit the official
                  <a
                    target="_blank"
                    href="https://www.chartjs.org/docs/latest/"
                  >
                    Chart.js documentation
                  </a>
                  .
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-area me-1"></i>
                  Area Chart Example
                </div>
                <div className="card-body">
                  <ChartAreaComponent
                    id="myAreaChart"
                    width="100%"
                    height="30"
                  />
                </div>

                <div class="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-bar me-1"></i>
                      Bar Chart Example
                    </div>
                    <div className="card-body">
                      <ChartBarComponent
                        id="myBarChart"
                        width="100%"
                        height="50"
                      />
                    </div>
                    <div className="card-footer small text-muted">
                      Updated yesterday at 11:59 PM
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <i className="fas fa-chart-pie me-1"></i>
                      Pie Chart Example
                    </div>
                    <div className="card-body">
                      <PieChartComponent
                        id="myPieChart"
                        width="100%"
                        height="50"
                      />
                    </div>
                    <div className="card-footer small text-muted">
                      Updated yesterday at 11:59 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default charts;
