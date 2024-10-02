import React, { useContext, useState , useRef } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png";
import logo1 from "../Assets/teslaroboat-logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png'

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');

  }



  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log("Toggle");
    setMenuOpen(!menuOpen);
  };
  return (
    
    <div className="BODY">
      <header>
        <nav>
          <img
            src={logo1}
            className="logo1"
            width="150px"
            height="100px"
            alt="logo"
          />
          <ul className={menuOpen ? "menu-active" : ""}>
          <button id="menu-close-btn-id" className="menu-close-btn" title="menu-close-btn" onClick={toggleMenu}> 
              <div className="menu-bar"style={{ transform: "rotate(45deg)", translate: "2px 6px" }}></div>
              <div className="menu-bar"style={{ transform: "rotate(125deg)", translate: "2px 0px" }}></div>
            </button>
            <li onClick={() => {setMenu("FarmingDrone");}}><Link style={{ textDecoration: "none" }} to="/farmingdrone">Farming Drone</Link>{menuOpen === "FarmingDrone" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("FarmingRobot");}}><Link style={{ textDecoration: "none" }} to="/FarmingRobot">Farming Robot</Link>{menuOpen === "FarmingRobot" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("IndustrialRobot");}}><Link style={{ textDecoration: "none" }} to="/IndustrialRobot">Industrial Robot</Link>{menuOpen === "IndustrialRobot" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("DomesticRobot");}}><Link style={{ textDecoration: "none" }} to="/DomesticRobot">Domestic Robot</Link>{menuOpen === "DomesticRobot" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("Shop");}}><Link style={{ textDecoration: "none" }} to="/Shop">Shop</Link>{menuOpen === "shop" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("Account");}}><Link style={{ textDecoration: "none" }} to="/Account">Account</Link>{menuOpen === "Account" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("Menu");}}><Link style={{ textDecoration: "none" }} to="/Menu">Menu</Link>{menuOpen === "Menu" ? <hr /> : <></>}</li>
          </ul>
          <button className="menu-btn" title="menu-btn" onClick={toggleMenu}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </button>
        </nav>
      </header>

      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Buy Now</p>
        </div>
        <img className='nav-dropdown'  onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
        <ul ref={menuRef} className="nav-menu">
          <li onClick={() => {setMenu("shop");}}><Link style={{ textDecoration: "none" }} to="/">Drone</Link>{menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("mens");}}><Link style={{ textDecoration: "none" }} to="/mens">Robot</Link>{menu === "mens" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("womens");}}><Link style={{ textDecoration: "none" }} to="womens">Electronics</Link>{menu === "womens" ? <hr /> : <></>}</li>
          <li onClick={() => {setMenu("kids");}}><Link style={{ textDecoration: "none" }} to="/kids">Software</Link>{menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
  <button onClick={() => {
    localStorage.removeItem('auth-token');window.location.replace('/');}}>Logout</button>)
    :(<Link to="/login"><button>Login</button></Link>)}

        
        
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>

      <div>
        <footer>
          <ul>
            <li onClick={() => {setMenu("about");}}><Link style={{ textDecoration: "none" }} to="/about">About</Link></li>
            <li onClick={() => { setMenu("privacy");}}><Link style={{ textDecoration: "none" }} to="/privacy">Privacy & Legal</Link></li>
            <li onClick={() => {setMenu("teslaroboatlab");}}><Link style={{ textDecoration: "none" }} to="/recalls">Robot Recalls</Link></li>
            <li onClick={() => {setMenu("contact");}}><Link style={{ textDecoration: "none" }} to="/contact">teslaroboatLab</Link>{menuOpen === "DomesticRobot" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("news");}}><Link style={{ textDecoration: "none" }} to="/news">News</Link>{menuOpen === "DomesticRobot" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("getupdates");}}><Link style={{ textDecoration: "none" }} to="/updates">Get Updates</Link>{menuOpen === "DomesticRobot" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("location");}}><Link style={{ textDecoration: "none" }} to="/location">Locations</Link>{menuOpen === "location" ? <hr /> : <></>}</li>
          </ul>
          <p>Roboat@2024</p>
        </footer>
      </div>
    </div>
    
  );
};
