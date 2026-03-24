import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="logo">
          Trusted Movers
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/quote" className="quote-btn">
            Get Quote
          </NavLink>
        </nav>
      </div>
    </header>
  )
}