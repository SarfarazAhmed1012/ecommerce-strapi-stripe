import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
// a84127d256186709075e0d39906c0293baa8af87c26f745bc44b342c032738ff4c0f569243eefd3ae9a707756d2bf35cb214ef631471b2511f5bc5f0ec0f2642c5874e5cc233a6c5fd93cf80edfc38d088228ceda713ddc4265510c95323b8e8f2acf779292900dfc7f63c028bddb0fd7fd57819bbf39c2eb93fe4574ef65974

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
