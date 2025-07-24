import React from 'react'
import './Banner.css'
import { Outlet } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-container"> 
            <h1>Gamer's Shop</h1>
            <p>Tu lugar de excelencia para comprar juegos</p>
            
        </div>
   
    </div>
  )
}

export default Banner