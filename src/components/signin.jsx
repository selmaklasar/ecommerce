import React from 'react'


function Signin() {
  return (
    <div className="input-wrapper">
        <input type="username" id="username" required autoComplete="off"/>
        <label htmlFor="username">Enter username</label>
        <div className="underline"></div>
      
    </div>
    
    
  )
}

export default Signin
