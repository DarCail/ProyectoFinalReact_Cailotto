import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./CartContent.css";

const CartContent = () => {
  const { cart, setCart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + (item.cantidad * (item.price || item.precio || 0)),
    0
  );

  const handleClear = () => setCart([]);
  const handleCheckout = () => {
    alert("¡Gracias por tu compra!");
    setCart([]);
  };

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de compras</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title || item.nombre}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <span className="cart-item-title">
                    {item.title || item.nombre}
                  </span>
                  <span className="cart-item-price">
                    ${item.price || item.precio}
                  </span>
                  <div className="cart-qty-controls">
                    <button onClick={() => decreaseQty(item.id)} className="cart-qty-btn">-</button>
                    <span className="cart-qty">{item.cantidad}</span>
                    <button onClick={() => increaseQty(item.id)} className="cart-qty-btn">+</button>
                  </div>
                </div>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${total}</strong>
          </div>
          <div style={{ marginTop: 24 }}>
            <button className="cart-clear-btn" onClick={handleClear}>
              Vaciar carrito
            </button>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContent;