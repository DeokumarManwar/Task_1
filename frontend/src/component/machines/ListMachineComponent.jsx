import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useGetMachines } from '../../services/machineAndMaintenanceService';

export const ListMachineComponent = () => {

  var { isLoading, data } = useGetMachines()

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns = [
    { field: 'col1', headerName: 'Machine', width: 200 },
    { field: 'col2', headerName: 'Model', width: 200 },
    { field: 'col3', headerName: 'Company', width: 200 },
    { field: 'col4', headerName: 'Maintenance due date', width: 200 },
    { field: 'col5', headerName: 'Purchase date', width: 200 },
  ];

  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3" />
        </a>
      </header>
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Machine's models</h3>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-first">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-header float-start float-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Deshboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    models
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Enter Machine wise models</h4>
            </div>
            <div className="card-body">


              <div style={{ height: 300, width: '100%' }}>
                <DataGrid columns={columns} rows={rows} slots={{ toolbar: GridToolbar }} />

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}
