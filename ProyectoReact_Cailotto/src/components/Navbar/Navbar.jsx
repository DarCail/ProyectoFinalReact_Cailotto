import { Link } from 'react-router-dom'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
          <Link to= "/">
            <h1 className='navbar-logo'>Shop.</h1>
          </Link>
          <Link to= "/cart">
            <CartWidget/>
          </Link>
        </nav>
    </div>
  )
}

export default Navbar