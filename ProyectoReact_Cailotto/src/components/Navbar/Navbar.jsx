import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Suma total de unidades en el carrito
  const totalItems = cart.reduce((acc, item) => acc + (item.cantidad || 1), 0);

  return (
    <>
      <div className='nav-container'>
          <nav className='navbar'>
            <Link to= "/">
              <h1 className='navbar-logo'>Gamer's Shop</h1>
            </Link>
            <Link to= "/cart" className="cart-link">
              🛒
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          </nav>
      </div>
     
    </>
  );
};

export default Navbar