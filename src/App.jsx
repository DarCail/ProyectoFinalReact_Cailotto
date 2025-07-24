import { useState,useEffect, use } from "react"

import Home from "./Home/Home"
import { getFirestore,doc,getDoc } from "firebase/firestore"
import Agregar from "./Agregar";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from './Context/CartContext'
import AppRoutes from "./Routes/Routes";


function App() {

  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>  

  )
}

export default App;
