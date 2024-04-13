import React, { useState } from 'react';
import style from "./HomePage.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faHeart,faBars,faSearch } from '@fortawesome/free-solid-svg-icons';


function Home() {
 
  const [showSearchbar, setSearchbar]=useState(false);

  const toggleSearchbar =()=>{
    setSearchbar(!showSearchbar);
  }
  const [cart,setCart]=useState(false);
  const toggleCart=()=>{
    setCart(!cart);
  }
  const [showDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!showDropdown);
  }
  return (
    <div>
       
    
    <div className={style.header}></div>
    <p className={style.logo}>Logo</p>
    <div className={style.links}>
       
        <ul>
        <Link to="/Login" className={style.login_link}>Login</Link>
        <Link to="/signup" className={style.signup_link}>Signup</Link>
        <Link to="/help" className={style.help_link}>Help</Link></ul>
        </div>
        <div className={style.headericons}>
          <li><FontAwesomeIcon icon={faCartShopping} className={style.carticon}/></li>
          <li><FontAwesomeIcon icon={faHeart} className={style.hearticon}/></li>
          <li className={style.search_li}>
          <input type="text" className={style.inputfield} placeholder="search"></input></li>  
      </div>
      
      <FontAwesomeIcon icon={faBars} className={style.bars} onClick={toggleDropdown}/>
      {showDropdown &&(
        <div className={style.dropdownlist}>
         <ul className={style.lists}>
        <li><Link to="/Login" className={style.login_link}>Login</Link></li>
        <li><Link to="/signup" className={style.signup_link}>Signup</Link></li>
        <li><Link to="/help" className={style.help_link}>Help</Link></li></ul>
         </div>
      )}
      </div>
    
  )
}

export default Home
