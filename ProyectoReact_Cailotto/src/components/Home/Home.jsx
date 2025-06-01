import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Products from "../ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />  
      <div className="product-card-container">
      <Products />
      </div>
    </>
  );
}

export default Home;