import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import EmployeeComponent from './components/EmployeeComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent></HeaderComponent>
        <Routes>
          {/* http://localhost:3000 */}
            <Route path='/' element={<ListEmployeeComponent></ListEmployeeComponent>}></Route>
          {/* http://localhost:8080/employees */}
            <Route path='/employees' element={<ListEmployeeComponent></ListEmployeeComponent>}></Route>
          {/* http://localhost:8080/add-employee */}
            <Route path='/add-employee' element = {<EmployeeComponent></EmployeeComponent>}></Route>
            {/* http://localhost:8080/edit-employee/1 */}
            <Route path='/edit-employee/:id' element={<EmployeeComponent></EmployeeComponent>}></Route>
        </Routes>
      
      <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
