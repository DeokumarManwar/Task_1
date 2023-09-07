import { useState } from 'react'
// import './App.css'
import { Deshboard } from './component/Deshboard'
import { Sidebar } from './component/Sidebar'

import "./assets/css/main/app.css";
import "./assets/css/main/app-dark.css";
import "./assets/css/shared/iconly.css";
import { Route, Routes } from 'react-router-dom';
import { ClientComponent } from './component/client/ClientComponent';
import { ListClientComponent } from './component/client/ListClientComponent';
import { EditClient } from './component/client/EditClient';
import { Erorr404 } from './component/errors/Erorr404';
import { AddEmployeeComponent } from './component/employees/AddEmployeeComponent';
import { ListEmployeeComponent } from './component/employees/ListEmployeeComponent';
import { EditEmployeeComponent } from './component/employees/EditEmployeeComponent';
import { AddMachineComponent } from './component/machines/AddMachineComponent';
import { AddModelByMachineComponent } from './component/machines/AddModelByMachineComponent';
import { ListMachineComponent } from './component/machines/ListMachineComponent';

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Deshboard />}></Route>

        {/* Client API */}
        <Route path='/client' element={<ClientComponent />}></Route>
        <Route path='/clientlist' element={<ListClientComponent />} />
        <Route path='/clientlist/editclient/:clientId' element={<EditClient />} />

        {/* Employees API */}
        <Route path='/employee' element={<AddEmployeeComponent />} />
        <Route path='/employeelist' element={<ListEmployeeComponent />} />
        <Route path='/employeelist/editemployee/:employeeId' element={<EditEmployeeComponent />} />

        {/* Virtual elements */}
        <Route path='/add-machine' element={<AddMachineComponent />} />

        {/* Machines & maintenance */}
        <Route path='/add-models' element={<AddModelByMachineComponent />} />
        <Route path='list-machine' element={<ListMachineComponent />} />
        {/* Error API */}
        <Route path='/*' element={<Erorr404 />} />
      </Routes>
    </>
  )
}

export default App
