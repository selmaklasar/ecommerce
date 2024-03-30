import React from 'react'
import style from "./signup.module.css";
function Signup() {
  return (
    <div className={style.signup}> 
      <form className={style.form_submission}>
        <div className={style.input_name}> 
        <label className={style.label_firstname}>FirstName</label><br/>
        <input type="text" placeholder="First Name"></input></div>
        <div className={style.input_box}>
        <label className={style.label_lastname}>LastName</label> <br/>
        <input type="text" placeholder="Last Name"></input><br/></div>  
        <div className="input_email">
        <label className={style.label_email}>Email Id</label><br/>
        <input type="text" placeholder="Email Id"></input><br/></div>
        <div className="input_pass">
        <label className={style.label_pass}>Password</label><br/>
        <input type="text" placeholder="Password"></input><br/></div>
        <div className="submitbtn">
        <button type="submit" value="submit">SUBMIT</button></div>



      </form>
    </div>
  )
}

export default Signup
