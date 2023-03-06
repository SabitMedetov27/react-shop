import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-com">
          <ul className="header-ul">
            <li className="header-li">
              <Link to="/seller">Seller Center</Link>
            </li>
            <li className="vert-line"></li>
            <li className="header-li">
              <Link to="/download">Download</Link>
            </li>
            <li className="vert-line"></li>
            <li className="header-li">
              <span className="header-span">Follow us on</span>
            </li>
            <ul className="header-ul2">
              <li className="header-li2">
                <a href="www.facebook.com" className="header-a">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="header-li2">
                <a href="www.instagram.com" className="header-a">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
           
          </ul>
          <ul className="header-ul3">
              <li><Link to="login">Register</Link></li>
              <li className="vert-line"></li>
              <li><Link to="login">Log in</Link></li>
            </ul>
        </div>
        <div>
          <Navbar/>
        </div>
      </div>
    </header>
  );
}

export default Header;
