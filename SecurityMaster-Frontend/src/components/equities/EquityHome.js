import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const EquityHome = () => {
  return (
    <div>
      <nav>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='AllEquities'>Equities</NavLink>
        <NavLink className="nav-link" to='ID'>Get Equities By ID</NavLink>
        <NavLink className="nav-link" to='Name'>Get Equities By Name</NavLink>
        <NavLink className="nav-link" to='Add'>Add Equity</NavLink>
        <NavLink className="nav-link"  to='Update'>Update Equity</NavLink>
        <NavLink className="nav-link"  to='Delete'>Delete Equity</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default EquityHome
