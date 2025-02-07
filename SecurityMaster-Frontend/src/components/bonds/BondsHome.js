import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const BondsHome = () => {
  return (
    <div>
      <nav>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='AllBonds'>Bonds</NavLink>
        <NavLink className="nav-link" to='ID'>Search Bond By ID</NavLink>
        <NavLink className="nav-link" to='Name'>Search Bond By Name</NavLink>
        <NavLink className="nav-link" to='Add'>Add Bond</NavLink>
        <NavLink className="nav-link" to='Update'>Update Bond</NavLink>
        <NavLink className="nav-link"  to='Delete'>Delete Bonds</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default BondsHome
