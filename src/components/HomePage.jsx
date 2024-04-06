import React, { useState } from 'react';
import style from "./HomePage.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faUser , faSearch } from '@fortawesome/free-solid-svg-icons';


function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const [showSearchbar, setSearchbar]=useState(false);

  const toggleSearchbar =()=>{
    setSearchbar(!showSearchbar);
  }
  const [cart,setCart]=useState(false);
  const toggleCart=()=>{
    setCart(!cart);
  }
  return (
    <div >
    <div className={style.header}>
      <h5 className={style.logo}>Logo</h5>
     
         
  
         <div className={style.menu}>
         <ul className={style.nav_menu}>
          <li>
              <FontAwesomeIcon icon={faSearch} onClick={toggleSearchbar} className={style.searchicon} />
              {showSearchbar && (
                <input type="search" className={style.Searchbar} placeholder="search" />
              )}
            </li>
         
         <Link to="/Login" className={style.login_link}>  <li><FontAwesomeIcon icon={faUser}  onClick={toggleLoginForm }  className={style.icon} /></li></Link>
         <Link to="/EmptyCart" className={style.cart_link} ><li><FontAwesomeIcon icon={faShoppingCart}  onClick={toggleCart} className={style.icon}/></li></Link>
          </ul></div><br/>
    </div>
   
 



    
 
   
    </div>
  )
}

export default Home
