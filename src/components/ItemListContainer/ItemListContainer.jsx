import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom";
import "./ItemListContainer.css";


const Products = (props) => {
    const products = props.products || [];
    const navigate = useNavigate();
    return (
        <div className="product-card-container">
            {
                products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt="img-product-card" />
                        <h2>{product.title}</h2>


                        {/* <Link to={`/producto/${product.id}`}> */}
                            <button onClick={()=>navigate(`/producto/${product.id}`)}>Detalles</button>

                        {/* </Link> */}

                    </div>
                ))
            }
        </div>
    );
}

export default Products;