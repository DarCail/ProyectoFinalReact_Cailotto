import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import { Outlet } from 'react-router-dom'

function Layout() {

  return (

   
   <div>
    <Navbar />
    <Banner />
    <Outlet />
   </div>
    
  )
}

export default Layout