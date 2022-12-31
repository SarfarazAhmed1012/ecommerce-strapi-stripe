import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Accessories</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Contact us</h1>
          <span>
            Contact us and get to know amazing offers that we only offer to our
            special customers. That we only offer to our special customers.
          </span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum oo nada akdj ajd ajjdalaye lado manu oo nada akdj ajd
            ajjda kado, oo nada akdj ajd ajjda jaiwroujs oja. oo nada akdj ajd
            ajjda. Lorem ipsum.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Ovonel</span>
          <span className="copyright">
            Copyright 2023. All rights reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
