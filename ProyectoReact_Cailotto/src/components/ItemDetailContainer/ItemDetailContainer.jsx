import { useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                const found = data.find((item) => String(item.id) === id);
                setProduct(found);
            });
    }, [id]);

    if (!product) return <div>Cargando...</div>;

    return (
         <>
            <Navbar />
    
   
        <div className="card">
            <img src={product.img} alt={product.nombre} />
            <h2>{product.nombre}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.precio}</p>
        </div>
         </>
    );
};

export default ItemDetailContainer;