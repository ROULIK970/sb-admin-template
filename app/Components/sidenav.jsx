"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faColumns,
  faAngleDown,
  faBookOpen,
  faTable,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

const sidenav = () => {
  const [layout, setLayout] = useState(true);
  const [page, setPage] = useState(true);
  const [auth, setAuth] = useState(true);
  const [err, setErr] = useState(true);
  const [sideNav, setSideNav] = useState(true);
  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav
          className={`sb-sidenav accordion ${
            sideNav ? "sb-sidenav-dark" : "sb-sidenav-light"
          }`}
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" href="/">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </div>
                Dashboard
              </Link>
              <div className="sb-sidenav-menu-heading">Interface</div>
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
                onClick={() => setLayout((prev) => !prev)}
              >
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faColumns} />
                </div>
                Layouts
                <div className="sb-sidenav-collapse-arrow">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </a>
              <div
                className={layout && "collapse"}
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a className="nav-link">Static Navigation</a>
                  <a
                    className="nav-link"
                    onClick={() => setSideNav((prev) => !prev)}
                  >
                    {sideNav ? "Light Sidenav" : "Dark Sidenav"}
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
                onClick={() => setPage((prev) => !prev)}
              >
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                Pages
                <div className="sb-sidenav-collapse-arrow">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </a>
              <div
                className={page && "collapse"}
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
                    onClick={() => setAuth((prev) => !prev)}
                  >
                    Authentication
                    <div className="sb-sidenav-collapse-arrow">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                  </a>
                  <div
                    className={auth && "collapse"}
                    id="pagesCollapseAuth"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link href="/login" className="nav-link">
                        Login
                      </Link>
                      <Link className="nav-link" href="/register">
                        Register
                      </Link>
                      <Link class="nav-link" href="/password">
                        Forgot Password
                      </Link>
                    </nav>
                  </div>
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError"
                    onClick={() => setErr((prev) => !prev)}
                  >
                    Error
                    <div className="sb-sidenav-collapse-arrow">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                  </a>
                  <div
                    className={err && "collapse"}
                    id="pagesCollapseError"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" href="/401">
                        401 Page
                      </Link>
                      <Link className="nav-link" href="/404">
                        404 Page
                      </Link>
                      <Link className="nav-link" href="/500">
                        500 Page
                      </Link>
                    </nav>
                  </div>
                </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Addons</div>
              <Link className="nav-link" href="/charts">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faChartArea} />
                </div>
                Charts
              </Link>
              <Link class="nav-link" href="/tables">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faTable} />
                </div>
                Tables
              </Link>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
    </div>
  );
};

export default sidenav;
