import Home from "./components/HomePage";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React, { useState } from "react"
import Signup from "./components/signup"
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import EmptyCart from "./components/emptycart";
import Feedback from "./components/feedback";
import Help from "./components/help";
import ContactUs from "./components/contactUs";
import OrderStatus from "./components/orderstatus"

function App() {
  

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/EmptyCart" element={<EmptyCart/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/Help" element={<Help/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/OrderStatus" element={<OrderStatus/>}/>
        </Routes>
        </Router>
      
    </>
  )
}

export default App
