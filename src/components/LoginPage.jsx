import React, { useState } from 'react';
import style from './LoginPage.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faHeart,faBars,faSearch } from '@fortawesome/free-solid-svg-icons';


function LoginPage() {
    const[hover,setHover]= useState(false);
    const toggleHover= () => {
      setHover(!hover);
    }
      const [showDropdown, setDropdown] = useState(false);
      const toggleDropdown = () => {
        setDropdown(!showDropdown);
      }
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
   
    <div>

<div className={style.header}></div>
    <p className={style.logo}>Logo</p>
    <div className={style.links}>
       
        <ul>
        <Link to="/Login" className={style.login_link}>Login</Link>
       
        <Link to="/signup" className={style.signup_link}>Signup</Link>
        
        <Link to="/help" className={style.help_link}  onMouseEnter={toggleHover}>Help</Link>
        {hover&&(
        <div className={style.hovermenu}>
    <Link to="/help" className={style.hoverhelp_link} >Help</Link>
      
<Link to="/orderstatus" >Order Status</Link>
    <Link to="/contactUs" >Contact Us</Link>
    <Link to="/Returns" >Returns</Link>
    <Link to="/privacypolicy" >Privacy Policy</Link>
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
         <div className={style.login_form}>
       <form action="submit" className={style.container}>
          <h2 className={style.heading}>Sign In</h2>
      <div className={style.inputbox}>
        <input type="text" required value={email} onChange={handleEmailChange}/>
        <label htmlFor="">Email</label>
      </div>
      <div className={style.inputbox2}>
        <input type="text" required   value={password}  onChange={handlePasswordChange}/>
        <label htmlFor="">Password</label>
      </div>
      <div className={style.condition}>
        <p>By continuing you agree to <Link to="/termsofuse" className={style.terms}> Terms of USe</Link> and <Link to="/privacypolicy" className={style.privacypolicy}>Privacy Policy</Link> </p>
        </div>
        <div className="btnsubmit">
        <button type="submit"  className={style.btn}>Login</button></div>
       <div className={style.newuser}>
        <p>New To Here?<Link to="/signup">Create an Account</Link></p>
       </div>
       </form>
    </div>
    
    
   </div>
  )
}

export default LoginPage
