import React from "react";
import forest from "../assets/img/nature.png";
import thumb from "../assets/img/thumb.png";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#28514F] gap-10">
      <img src={thumb} alt="" className="flex" />
      <h2 className="flex text-[white] text-3xl text-center">
        Our mission is to <br /> encourage readiness for all
      </h2>
      <p className="flex text-[white] text-center">
        It's our dream that one day, everyday readiness will be quite ordinary{" "}
        <br /> - like brushing your teeth. <br /> A little bit of effort with a
        big payoff.
      </p>
      <Link to="/btn">
        <button className="flex items-center justify-center bg-[#FFFFFF] hover:bg-[black] hover:text-[white] rounded-[50px] w-[200px] h-[55px] text-sm shadow-lg">
          Learn more about us
        </button>
      </Link>
      <img src={forest} alt="" className="flex" />
    </div>
  );
};

export default Bottom;
