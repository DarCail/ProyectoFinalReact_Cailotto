import { useState,useEffect, use } from "react"

import Home from "./Home/Home"
import { getFirestore,doc,getDoc } from "firebase/firestore"
import Agregar from "./Agregar";
import Navbar from "./components/Navbar/Navbar";

import AppRoutes from "./Routes/Routes";


function App() {

  return (

      <AppRoutes />

  )
}

export default App;
