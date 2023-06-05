import React from 'react'
import "../app/globals.css";
import Table from '../app/Components/table'
import Link from 'next/link'
import Footer from "../app/Components/footer.jsx";
import Nav from "../app/Components/nav.jsx";
import SideNav from '../app/Components/sidenav.jsx'

const tables = () => {
  return (
    <div className="sb-nav-fixed">
      <Nav/>
      <SideNav/>
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Tables</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <Link href="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Tables</li>
              </ol>
              <div className="card mb-4">
                <div className="card-body">
                  DataTables is a third party plugin that is used to generate
                  the demo table below. For more information about DataTables,
                  please visit the
                  <a target="_blank" href="https://datatables.net/">
                    official DataTables documentation
                  </a>
                  .
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  DataTable Example
                </div>
                <div className="card-body">
                  <Table />
                </div>
              </div>
            </div>
          </main>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default tables

