import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='/Equities'>Equities</NavLink>
        {/* <NavLink className="nav-link" to='/AllEquities'>Equities</NavLink>
        <NavLink className="nav-link" to='/Equities/ID'>Get Equities By ID</NavLink>
        <NavLink className="nav-link" to='/Equities/Add'>Add Equity</NavLink>
        <NavLink className="nav-link"  to='/Equities/Update'>Update Equity</NavLink>
        <NavLink className="nav-link"  to='/Equities/Delete'>Delete Equity</NavLink> */}

        <NavLink className="nav-link" to="/bonds">Bonds</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
