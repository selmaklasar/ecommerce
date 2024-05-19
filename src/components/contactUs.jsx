import React, { useState } from 'react';
import style from "./contactUs.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faHeart,faBars,faXmark} from '@fortawesome/free-solid-svg-icons';


function ContactUs() {

  const[hover,setHover]= useState(false);
  const toggleHover= () => {
    setHover(!hover);
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
      
        <Link to="/help" className={style.help_link}  onMouseEnter={toggleHover} >Help </Link>
        {hover&&(
    <div className={style.hovermenu}>
    <Link to="/help" className={style.hoverhelp_link} >Help</Link>
      
<Link to="/orderstatus" >Order Status</Link>

<Link to="/contactUs" >Contact Us</Link>
<Link to="/returns" >Returns</Link>
<Link to="/privacypolicy" >Privacy Policy</Link>
<Link to="termsofuse" >Terms of Use</Link>
<Link to="/Feedback" > Feedback</Link>

</div>

        )}
        </ul>
     
        </div>
      
      
        <div className={style.headericons}>
          <li><FontAwesomeIcon icon={faCartShopping} className={style.carticon}/></li>
          <li><FontAwesomeIcon icon={faHeart} className={style.hearticon}/></li>
          <li className={style.search_li}>
          <input type="text" className={style.inputfield} placeholder="search"></input></li>  
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
      
      <h2 className={style.h2}>Contact US</h2>
    </div>
  )
}

export default ContactUs
 