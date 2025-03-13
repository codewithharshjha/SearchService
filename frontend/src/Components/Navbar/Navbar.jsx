import React, { useState, useRef, useContext } from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png";
import logo1 from "../Assets/teslaroboat-logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import { useSelector } from 'react-redux';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    

   

    return (
        <div className="BODY">
           

            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>Buy Now</p>
                </div>
                
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={() => { setMenu("shop"); }}><Link style={{ textDecoration: "none" }} to="/">Drone</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens"); }}><Link style={{ textDecoration: "none" }} to="/mens">Robot</Link>{menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens"); }}><Link style={{ textDecoration: "none" }} to="womens">Electronics</Link>{menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids"); }}><Link style={{ textDecoration: "none" }} to="/kids">Software</Link>{menu === "kids" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                    {localStorage.getItem('auth-token') ? (
                        <button onClick={() => {
                            localStorage.removeItem('auth-token'); window.location.replace('/');
                        }}>Logout</button>
                    ) : (<Link to="/login"><button>Login</button></Link>)}

                    <Link to="/register">Register</Link>
                    <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>

            <footer>
                <ul>
                    <li><Link style={{ textDecoration: "none" }} to="/about">About</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/privacy">Privacy & Legal</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/recalls">Robot Recalls</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/contact">teslaroboatLab</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/news">News</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/updates">Get Updates</Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/location">Locations</Link></li>
                </ul>
                <p>Roboat@2024</p>
            </footer>
        </div>
    );
};

export default Navbar;
