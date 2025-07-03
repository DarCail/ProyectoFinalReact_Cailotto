import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Home/Home"
import CartContent from "../components/CartContent/CartContent"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "../components/Navbar/Navbar"

const AppRoutes = () => {
  return (
 <BrowserRouter>
    <Routes fallbackElement={<div>Loading...</div>}>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
         <Route path="/cart" element={<CartContent />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Route>
      {/* <Route element={<Navbar/>}>
        <Route path="/cart" element={<CartContent />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Route> */}
      
    </Routes>
 </BrowserRouter>
  )
}

export default AppRoutes