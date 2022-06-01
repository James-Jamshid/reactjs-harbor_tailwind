import { IconContext } from "react-icons";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
  return (
    <IconContext.Provider value={{}}>
      <div className="flex  bg-[ #E5E5E5] p-16">
        <div className="flex flex-1  flex-col gap-y-4 ">
          <Link to="/">
            <h1 className="flex text-3xl">harbor</h1>
          </Link>
          <h5>© 2020 harbor. All rights reserved</h5>
          <div className="flex items-center gap-x-5">
            <Link to="/btn">
              <h5>Privacy</h5>
            </Link>
            <Link to="/btn">
              <h5>Terms</h5>
            </Link>
            <Link to="/btn">
              <h5>FAQ</h5>
            </Link>
          </div>
          <div className="flex items gap-x-5">
            <Link to="/btn">
              <h5>Journal</h5>
            </Link>
            <Link to="/btn">
              <h5>Contact</h5>
            </Link>
            <Link to="/btn">
              <h5>Shop</h5>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-evenly ">
          <Link to="/btn">
            <h5>Home</h5>
          </Link>
          <Link to="/btn">
            <h5>About</h5>
          </Link>
          <Link to="/btn">
            <h5>Risks</h5>
          </Link>
        </div>
        <div className="flex flex-1  justify-evenly ">
          <a href="https://twitter.com">
            <FiTwitter id="icons" />
          </a>
          <a href="https://www.instagram.com">
            <FiInstagram id="icons" />
          </a>
          <a href="https://www.facebook.com">
            <FiFacebook id="icons" />
          </a>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
