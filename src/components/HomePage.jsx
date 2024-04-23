import React, { useState } from 'react';
import style from "./HomePage.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faHeart,faBars,faXmark} from '@fortawesome/free-solid-svg-icons';


function Home() {
 
  const [hover, setHover]=useState(false);


  
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
      
        <Link to="/help" className={style.help_link} >Help
    <div className={style.hovermenu}>
    <Link to="/help" className={style.hoverhelp_link} >Help</Link>
      
<Link to="/orderstatus" >Order Status</Link>

<Link to="/contactUs" >Contact Us</Link>
<Link to="/" >Returns</Link>
<Link to="" >Privacy Policy</Link>
<Link to="" >Terms of Use</Link>
<Link to="/Feedback" > Feedback</Link>

</div>
    </Link>
        </ul>
       
        </div>
      
     
        <div className={style.headericons}>
          <li><FontAwesomeIcon icon={faCartShopping} className={style.carticon}/></li>
          <li><FontAwesomeIcon icon={faHeart} className={style.hearticon}/></li>
          <li className={style.search_li}>
          <input type="text" className={style.inputfield} placeholder="search"></input></li>  
      </div>





      <div className={style.dropdwn}>
      <span className={style.content}>
          <Link to="/Arrivals">New &Featured</Link>
         
          <Link to="/latest">Men</Link>
          <Link to="/Bestsellers">Women</Link>
          <Link to="/Arrivals">Kids</Link>
          
          </span> </div>
          <div className={style.listitems}>
          <Link to="/Arrivals">New Arrivals</Link>
          <Link to="/latest">Latest Collections</Link>
          <Link to="/Bestsellers">Bestsellers</Link>
          <Link to="/Arrivals">New Arrivals</Link>
          <Link to="/latest">Latest Collections</Link>
          <Link to="/Bestsellers">Bestsellers</Link>
          </div>

     
    
      <FontAwesomeIcon icon={faBars} className={style.bars} onClick={toggleDropdown}/>
      <FontAwesomeIcon icon={faXmark} className={style.mark} />
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
