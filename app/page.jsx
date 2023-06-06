"use client";
import { useState } from "react";
import Table from "./Components/table.jsx";
import ChartBarComponent from "./Components/chart-bar.jsx";
import ChartAreaComponent from "./Components/chart-area.jsx";
import Footer from "./Components/footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Components/nav.jsx";
import {
  faTable,
  faAngleRight,
  faChartArea,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
const [sideNavToggle, setSideNavToggle] = useState(false);
  return (
    <main className={`sb-nav-fixed ${sideNavToggle && "sb-sidenav-toggled"}`}>
      <Nav commonNav={sideNavToggle} commonNavFunc={setSideNavToggle} />
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Primary Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-warning text-white mb-4">
                    <div className="card-body">Warning Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-success text-white mb-4">
                    <div className="card-body">Success Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-danger text-white mb-4">
                    <div className="card-body">Danger Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <FontAwesomeIcon icon={faChartArea} className="me-1" />
                      Area Chart Example
                    </div>
                    <div className="card-body">
                      <ChartAreaComponent
                        id="myAreaChart"
                        width="100%"
                        height="40"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <FontAwesomeIcon icon={faChartBar} className="me-1" />
                      Bar Chart Example
                    </div>
                    <div className="card-body">
                      <ChartBarComponent
                        id="myBarChart"
                        width="100%"
                        height="40"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <FontAwesomeIcon icon={faTable} className="me-1" />
                  DataTable Example
                </div>
                <div className="card-body">
                  <Table />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </main>
  );
}
