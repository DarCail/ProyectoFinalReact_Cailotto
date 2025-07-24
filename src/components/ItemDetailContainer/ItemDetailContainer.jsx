import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./ItemDetailContainer.css";
import { getItemById } from "../../Services/Products.Sevices";
import { CartContext } from "../../Context/CartContext";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchItems = async () => {
          const data = await getItemById(id);
          setProduct(data);
        };
        fetchItems();
      }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <>
            <div className="card">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={handleAddToCart}>Agregar al carrito</button>
                <br />
                <Link to="/">
                    <button style={{marginTop: "16px"}}>Volver a la página principal</button>
                </Link>
            </div>
        </>
    );
};

export default ItemDetailContainer;