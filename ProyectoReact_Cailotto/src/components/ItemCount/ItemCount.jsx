import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleAdd = () => {
    if (count >= 1 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <button onClick={handleDecrease} disabled={count <= 1}>-</button>
      <span style={{ margin: "0 12px" }}>{count}</span>
      <button onClick={handleIncrease} disabled={count >= stock}>+</button>
      <br />
      <button
        onClick={handleAdd}
        disabled={stock === 0}
        style={{ marginTop: "12px" }}
      >
        Agregar al carrito
      </button>
      {stock === 0 && <p style={{ color: "red" }}>Sin stock</p>}
    </div>
  );
};

export default ItemCount;