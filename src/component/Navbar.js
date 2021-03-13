import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
       <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary" 
       style={{'background': 'linear-gradient(to right,#ff512f ,#dd2476)'}} >
           <div className="container">
               <Link to="/" className="navbar-brand">Contact</Link>
               
               <div>
               <Link to="/contact/add" className="btn btn-light ml-auto">Add Contact</Link>
               </div>

           </div>
           
       </nav>
    )
}

export default Navbar;
