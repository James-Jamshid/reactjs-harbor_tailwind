import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden md:flex bg-[#F9F7F4] justify-center items-centers">
      <div className=" flex flex-1 items-center justify-centers pl-8">
        <Link to="/">
          <h1 className="text-3xl">harbor</h1>
        </Link>
      </div>
      <div className="flex-1 flex-row items-center justify-evenly p-8">
        <div className="flex flex-row justify-evenly ">
          <Link to="/">
            <h5 className="flex justify-center items-center border w-20  rounded-4xl bg-[#a0a2a3] hover:bg-[#8999a1]   ">
              Home
            </h5>
          </Link>
          <Link to="/btn">
            <h5>About</h5>
          </Link>
          <Link to="/btn">
            <h5>Know Your Risks</h5>
          </Link>
          <Link to="/btn">
            <h5>For Work</h5>
          </Link>
          <Link to="/btn">
            <h5>Journal</h5>
          </Link>
          <Link to="/btn">
            <h5>Shop</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
