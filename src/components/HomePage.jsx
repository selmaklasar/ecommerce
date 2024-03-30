import React from 'react';
import style from "./HomePage.module.css"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={style.header}>
     
        <div className={style.logo}>Ecommerce Website</div>
      <div className={style.searchbox}>
        <input type="search"></input>
        <button type="submit">Search</button></div>
         <ul className={style.nav_menu}>
         <li><Link to= "/signup" className={style.signup_link}>Signup</Link>
         </li>
         <li><Link to= "/login" className={style.login_link}>Login</Link>
          </li>
          </ul>
     

      
    </div>
  )
}

export default Home
