import Home from "./components/HomePage";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React, { useState } from "react"
import Signup from "./components/signup"
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";


function App() {
  

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/About" element={<About/>}/>
          
        </Routes>
        </Router>
      
    </>
  )
}

export default App
