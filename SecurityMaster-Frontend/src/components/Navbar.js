import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/AllEquities'>Equities</NavLink>
        <NavLink to='/Equities/ID'>Get Equities By ID</NavLink>
        <NavLink to='/Equities/Add'>Add Equity</NavLink>
        <NavLink to='/Equities/Update'>Update Equity</NavLink>
        <NavLink to='/Equities/Delete'>Delete Equity</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
