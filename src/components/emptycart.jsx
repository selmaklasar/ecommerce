import React from 'react'
import { Link } from 'react-router-dom'
import style from "./emptycart.module.css"

function EmptyCart() {
  return (
    <div>
      <p className={style.heading}>Your Cart Is Now Empty</p>
      <Link to="/Login" className={style.login_link}>Login</Link><p>First</p>
      
    </div>
  )
}

export default EmptyCart
