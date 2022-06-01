import React from "react";
import image2 from "../assets/img/image2.png";
import playmarket from "../assets/img/playmarket.png";
import phone from "../assets/img/image1.png";
import { Link } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="flex flex-col items-center justify-center p-14 gap-y-5 bg-[#F9F7F4]">
      <h2 className="text-4xl">
        Reimagining readiness for <br /> life's uncertain moments.
      </h2>
      <p>
        The app that makes disaster preparedness easy and accessible. <br />
        Because sometimes tomorrow doesn't look like today.
      </p>
      <div className="flex items-center gap-x-2">
        <Link to="/btn">
          <button className="flex  items-center  justify-evenly border w-40 h-14 rounded-4xl text-[white] bg-[#28514F] hover:bg-black hover:text-[white]">
            <img className="bg-[#28514F] hover:bg-black" src={image2} alt="" />
            APP STORE
          </button>
        </Link>
        <Link to="/btn">
          <button className="flex  items-center  justify-evenly border w-40 h-14 rounded-4xl text-[white] bg-[#28514F] hover:bg-black hover:text-[white]">
            <img
              className="bg-[#28514F] hover:bg-black"
              src={playmarket}
              alt=""
            />
            PLAY STORE
          </button>
        </Link>
      </div>
      <div className="hidden  md:flex pr-32">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default Wrapper;
