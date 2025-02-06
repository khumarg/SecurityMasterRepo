import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const BondsHome = () => {
  return (
    <div>
      <nav>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='AllBonds'>Bonds</NavLink>
        <NavLink className="nav-link" to='ID'>Get Bonds By ID</NavLink>
        <NavLink className="nav-link" to='Add'>Add Bonds</NavLink>
        <NavLink className="nav-link"  to='Update'>Update Bonds</NavLink>
        <NavLink className="nav-link"  to='Delete'>Delete Bonds</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default BondsHome
