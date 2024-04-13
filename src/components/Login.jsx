import React from 'react'
import style from "./Login.module.css"



function Login() {
  return (
   
    <div className={style.login_form}>
       <form action="submit" className={style.container}>
      <h2 className={style.heading}>Sign In</h2>
        <p>Email</p>
        <input type="email" placeholder="Email" className={style.email_input}></input>
        <p>Password</p>
        <input type="password" placeholder="Password"></input><br/>
        <div className="btnsubmit">
        <button type="submit"  className={style.btn}>Login</button></div>
      </form>
      
    </div>
  )
}

export default Login
