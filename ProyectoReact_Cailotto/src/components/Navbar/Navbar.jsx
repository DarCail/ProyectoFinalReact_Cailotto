import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
            <h1 className='navbar-logo'>Shop.</h1>
            <CartWidget/>
        </nav>
    </div>
  )
}

export default Navbar