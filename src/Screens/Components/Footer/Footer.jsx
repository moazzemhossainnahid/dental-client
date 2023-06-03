import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <h3>Social</h3>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Flicker</a>
          <a href="/">Instagram</a>
        </li>
        <li className="footer-item">
          <h3>Dental Clinic</h3>
          <a href="/">Dr. Alexander Slims</a>
          <a href="/">Dr. Amy Clarke</a>
          <a href="/">Dr. Archie White</a>
          <a href="/">Dr. Daylon Taylor</a>
        </li>
        <li className="footer-item">
          <h3>About Us</h3>
          <a href="/">Services</a>
          <a href="/">Orthodontics</a>
          <a href="/">Special Offers</a>
          <a href="/">FAQ</a>
        </li>
        <li className="footer-item">
          <h3>Contact</h3>
          <a href="/">Rampura, Dhaka, Bangladesh.</a>
          <a href="/">Phone: +592169356</a>
          <a href="/">Email: alifahmed47@gmail.com</a>
          <a href="/">Office Time: 8:00 a.m - 8:00 p.m</a>
        </li>
      </ul>

      <p className="footer-copyright">
        <small>&copy;2021 All Rights Reserved by Imtiaz Azad</small>
      </p>
    </footer>
  );
};

export default Footer;
