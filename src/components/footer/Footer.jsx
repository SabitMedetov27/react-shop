import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cont">
          <Link to="/" className="footer-blog">
            privacy policy
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="footer-blog">
            term of service
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="footer-blog">
            About SnapUp.
          </Link>
        </div>
        <span className="footer-span">
          &copy; 2023 SnapUp. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
