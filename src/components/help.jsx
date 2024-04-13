import React, { useState } from 'react'
import style from "./help.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faHeart,faBars} from '@fortawesome/free-solid-svg-icons';


function Help() {
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
          <input type="text" className={style.inputfield} placeholder="search" autoComplete="off"></input></li>  
         
      </div>
      <div className={style.dropdownlist}>
      <FontAwesomeIcon icon={faBars} className={style.bars} onClick={toggleDropdown}/>
      {showDropdown &&(
         <ul className={style.lists}>
         <Link to="/Login" className={style.login_link}>Login</Link>
         <Link to="/signup" className={style.signup_link}>Signup</Link>
         <Link to="/help" className={style.help_link}>Help</Link>
        <Link to="/signup">NEw &Featured</Link></ul>
      )}
      </div>
      <p className={style.heading}> GET HELP</p>
      <div className={style.searchbar}>
      
      <input type="search" placeholder="What can we help you with ?" className={style.searchbox}></input>
      
      </div>
    </div>
  )
}

export default Help
