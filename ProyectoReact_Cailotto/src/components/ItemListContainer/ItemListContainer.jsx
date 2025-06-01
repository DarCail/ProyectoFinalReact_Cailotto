import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./ItemListContainer.css";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
       fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])
    
    return products.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h2>{product.nombre}</h2>
            <p>{product.description}</p>
            
            <Link to={`/producto/${product.id}`}>
                <button>Detalles</button>
            </Link>
        </div>
    ));
}

export default Products;