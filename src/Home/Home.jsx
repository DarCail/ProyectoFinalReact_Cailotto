import Products from "../components/ItemListContainer/ItemListContainer";
import { use, useEffect, useState } from "react";
import { getItem } from "../Services/Products.Sevices";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItem();
      setProducts(data);
    };
    fetchItems();
  }, []);


  return <Products products={products} />;
};

export default Home;