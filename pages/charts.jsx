"use client";

import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import Link from 'next/link';
import ChartAreaComponent from "../app/Components/chart-area.jsx";
import ChartBarComponent from "../app/Components/chart-bar.jsx";
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
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <a className="navbar-brand ps-3" href="index.html">
          Start Bootstrap
        </a>
        {/* <!-- Sidebar Toggle--> */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i class="fas fa-bars"></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <a className="nav-link" href="index.html">
                  <div className="sb-nav-link-icon">
                    <i Name="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Layouts
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="layout-static.html">
                      Static Navigation
                    </a>
                    <a className="nav-link" href="layout-sidenav-light.html">
                      Light Sidenav
                    </a>
                  </nav>
                </div>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  Pages
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapsePages"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav
                    className="sb-sidenav-menu-nested nav accordion"
                    id="sidenavAccordionPages"
                  >
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseAuth"
                      aria-expanded="false"
                      aria-controls="pagesCollapseAuth"
                    >
                      Authentication
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="pagesCollapseAuth"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link" href="login.html">
                          Login
                        </a>
                        <a className="nav-link" href="register.html">
                          Register
                        </a>
                        <a className="nav-link" href="password.html">
                          Forgot Password
                        </a>
                      </nav>
                    </div>
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseError"
                      aria-expanded="false"
                      aria-controls="pagesCollapseError"
                    >
                      Error
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="pagesCollapseError"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link" href="401.html">
                          401 Page
                        </a>
                        <a className="nav-link" href="404.html">
                          404 Page
                        </a>
                        <a className="nav-link" href="500.html">
                          500 Page
                        </a>
                      </nav>
                    </div>
                  </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-area"></i>
                  </div>
                  Charts
                </a>
                <a className="nav-link" href="tables.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table"></i>
                  </div>
                  Tables
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
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
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Your Website 2023
                </div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default charts;
