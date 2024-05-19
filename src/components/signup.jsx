import React ,{ useState } from 'react'

import style from "./signup.module.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faHeart,faBars,faSearch } from '@fortawesome/free-solid-svg-icons';




function Signup() {

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
        <Link to="/help" className={style.help_link} onMouseEnter={toggleHover} >Help</Link>
        {hover&&(
    <div className={style.hovermenu}>
        <Link to="/help" className={style.hoverhelp_link} >Help</Link>
        <Link to="/orderstatus" >Order Status</Link>
         <Link to="/contactUs" >Contact Us</Link>
         <Link to="/" >Returns</Link>
         <Link to="" >Privacy Policy</Link>
         <Link to="/Termsofuse" >Terms of Use</Link>
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
      {showDropdown &&(
        <div className={style.dropdownlist}>
         <ul className={style.lists}>
        <li><Link to="/Login" className={style.login_link}>Login</Link></li>
        <li><Link to="/signup" className={style.signup_link}>Signup</Link></li>
        <li><Link to="/help" className={style.help_link}>Help</Link></li></ul>
     </div>
      )}
      
    <div className={style.signup}> 
    
      <form className={style.form_submission}>
      <p className={style.heading}>SignUp</p>
     
        <div className={style.input_name}> 
        <label className={style.label_firstname}>FirstName</label><br/>
        <input type="text" ></input></div>
        <div className={style.input_box}>
        <label className={style.label_lastname}>LastName</label> <br/>
        <input type="text" ></input><br/></div>  
        <div className={style.input_email}>
        <label className={style.label_email}>Email Id</label><br/>
        <input type="text" ></input><br/></div>
        <div className={style.input_pass}>
        <label className={style.label_pass}>Password</label><br/>
        <input type="password" ></input><br/></div>
        <div className={style.submitbtn}>
        <button type="submit" value="submit" className={style.btn}>SUBMIT</button></div>
        <div className={style.loginlink}>
        <p>Already have an account?<Link to="/Login">Login</Link></p>

        </div>
      </form>
    </div>
    </div>
  )
}

export default Signup
