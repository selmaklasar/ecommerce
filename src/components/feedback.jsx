import React from 'react'
import style from "./feedback.module.css"
import { Link } from 'react-router-dom'


function Feedback() {
  return (
    <div className={style.body}>
      <div className={style.feedback}>
        <div className={style.feedbackform}>
      <h2>Send US Feedback</h2>
      <p>First What would you like to tell us about?</p>
      <div className={style.fdbacksubmit}>
      <input type='text'></input></div>
      <div className={style.btnsubmit}>
      <button type='submit'>Submit</button></div>
      </div>
      </div>
      
      
      
    </div>
  )
}

export default Feedback
