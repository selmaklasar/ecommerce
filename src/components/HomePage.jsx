import React, { useState } from 'react';
import style from "./HomePage.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faUser , faSearch} from '@fortawesome/free-solid-svg-icons';


function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const [showSearchbar, setSearchbar]=useState(false);

  const toggleSearchbar =()=>{
    setSearchbar(!showSearchbar);
  }
  return (
    <div >
    <div className={style.header}>
      <h5 className={style.logo}>Logo</h5>
     
         
  
         <div className={style.menu}>
         <ul className={style.nav_menu}>
          <li>
              <FontAwesomeIcon icon={faSearch} onClick={toggleSearchbar} className={style.icon} />
              {showSearchbar && (
                <input type="search" className={style.Searchbar} placeholder="Search" />
              )}
            </li>
         
         <Link to="/Login" className={style.login_link}>  <li><FontAwesomeIcon icon={faUser}  onClick={toggleLoginForm }  className={style.icon} /></li></Link>
          <li><FontAwesomeIcon icon={faShoppingCart}  className={style.icon}/></li>
          </ul></div><br/>
    </div>
  
 



    
 
   
    </div>
  )
}

export default Home
