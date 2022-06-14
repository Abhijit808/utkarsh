import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/images (2).jpeg"
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <Link to="/">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        </Link>
        <ul className="links">
            <li>
                <Link to = "/"  className='anchor'>Home</Link >
            </li>
            <li>
                <Link to = "/About" className='anchor'>About</Link>
            </li>
            <li>
                <Link to = "/Team" className='anchor'>Team</Link>
            </li>
            <li>
                <Link to = "/Events" className='anchor'>Events</Link>
            </li>
            <li>
                <Link to = "/Events" className='anchor'>Blogs</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar