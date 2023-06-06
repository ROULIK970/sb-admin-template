"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faUser,
  faTachometerAlt,
  faColumns,
  faAngleDown,
  faBookOpen,
  faTable,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

const nav = ({commonNav, commonNavFunc}) => {
  const [navLinkDropdown, setNavLinkDropdown] = useState(false);
  const [layout, setLayout] = useState(true);
  const [page, setPage] = useState(true);
  const [auth, setAuth] = useState(true);
  const [err, setErr] = useState(true);
  const [sideNav, setSideNav] = useState(true);

  return (
    <main className={`sb-nav-fixed ${commonNav && "sb-sidenav-toggled"}`}>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <Link href="/" className="navbar-brand ps-3">
          Start Bootstrap
        </Link>
        {/* <!-- Sidebar Toggle--> */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => commonNavFunc((prev) => !prev)}
          />
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
              <FontAwesomeIcon icon={faSearch} />
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
              onClick={() => setNavLinkDropdown((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faUser} className="fa-fw" />
            </a>
            <ul
              className={`${
                navLinkDropdown && "show"
              } dropdown-menu dropdown-menu-end`}
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
    </main>
  );
};

export default nav;
