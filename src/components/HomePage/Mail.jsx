import React from "react";
import image2 from "../assets/img/image2.png";
import playmarket from "../assets/img/playmarket.png";
import join from "../assets/img/join.png";

const Mail = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-10 bg-[ #E5E5E5] pt-10">
      <div className="flex bg-[#F8E6BE] ">
        <div className="flex flex-1 justify-center flex-col gap-y-5 p-7">
          <h2 className="flex text-3xl">
            Stay one step <br /> ahead with harbor
          </h2>
          <div className="flex items-center gap-x-2">
            <button className="flex  items-center  justify-evenly border w-40 h-14 rounded-4xl text-[white] bg-[#28514F] hover:bg-black hover:text-[white]">
              <img
                className="bg-[#28514F] hover:bg-black"
                src={image2}
                alt=""
              />
              APP STORE
            </button>
            <button className="flex  items-center  justify-evenly border w-40 h-14 rounded-4xl text-[white] bg-[#28514F] hover:bg-black hover:text-[white]">
              <img
                className="bg-[#28514F] hover:bg-black"
                src={playmarket}
                alt=""
              />
              PLAY STORE
            </button>
          </div>
        </div>
        <div className="flex">
          <img src={join} alt="" className="flex" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-y-11 pb-20 ">
        <h2 className="flex text-3xl">Join harbor high fives</h2>
        <p className="flex ">
          Up high. Down low. Tips on how to find your way through any disaster{" "}
          <br /> in the best way possible: together. And be the first in line
          for Android.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Email address"
            className="flex w-[276px] h-[60px] pl-5 bg-[ #FFFFFF] shadow-2xl rounded-l-[40px]"
          />
          <button className="flex w-[117px] h-[60px] text-[17px] items-center justify-center text-[white] bg-[#28514F] hover:bg-black shadow-lg rounded-r-[40px]">
            SIGN UP
          </button>
        </div>
        <p className="flex">Our commitment to protecting your Data Privacy</p>
      </div>
    </div>
  );
};

export default Mail;
