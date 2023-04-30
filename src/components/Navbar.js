import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {AiFillLock} from 'react-icons/ai'
import {SiFoodpanda} from 'react-icons/si'
function Navbar() {
  return (
   <div className="navbar navbar-expand-sm bg-dark  " id="nav">
   <div className="container-fluid">
     
     <h5 className='text-white'>{" "}<SiFoodpanda/>   Foodie</h5>
     <button data-bs-target="#menu " data-bs-toggle="collapse" class="navbar-toggler">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse justify-content-end " id="menu">
     <ul className='nav   bg-dark'>
        <li className="nav-item ">
           <Link className='nav-link text-white' to="/">
            <button className='bg-dark text-white border-rounded' >{"  "} <AiFillHome/> Home</button>
           </Link>
        </li >
        <li className="nav-item ">
        <Link className='nav-link text-white' to="/Signup">
            signup
           </Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link text-white' to="/Signin">
             Login
           </Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link text-white' to="/Aboutus">
            <button className="bg-black text-white">{""}<AiFillLock/> About Us</button>
           </Link>
        </li>
        
       
         
    </ul>
     </div>
   </div>
 </div>
  );
}

export default Navbar;
