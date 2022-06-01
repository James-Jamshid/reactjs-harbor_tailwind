import React from "react";
import rate from "../assets/img/rate1.png";
import applegreen from "../assets/img/applegreen.png";

const Child = () => {
  return (
    <div className=" flex items-center flex-col gap-y-3 bg-[#F9F7F4]">
      <h2 className="text-3xl">We're ready, are you?</h2>
      <p>Here's what people are saying about harbor.</p>
      <div className=" md:flex  justify-evenly gap-4 md:gap-y-4  ">
        <div className="flex shadow-lg justify-center gap-y-3 p-4 bg-[white] flex-col rounded-3xl w-72 h-52 ">
          <p className="bg-[white]">
            It's beautiful, easy to use, and is <br /> genuinely growing my
            confidence <br /> for crisis preparation.
          </p>
          <img className="bg-[white] w-20" src={rate} alt="" />
          <div className="flex gap-4 items-center bg-[white]">
            <img className="bg-[white] w-5" src={applegreen} alt="" />
            <p className="bg-[white]">
              Antonea <br />
              iOS Beta Tester
            </p>
          </div>
        </div>
        <div className="flex shadow-lg justify-center gap-y-3 p-4 bg-[white] flex-col rounded-3xl w-72 h-52 ">
          {" "}
          <p className="bg-[white]">
            This app is something I’ve been <br /> hoping for for a while now.
            So <br /> I’m excited to be beta testing it.
          </p>
          <img className="bg-[white] w-20" src={rate} alt="" />
          <div className="flex gap-4 items-center bg-[white]">
            <img className="bg-[white] w-5" src={applegreen} alt="" />
            <p className="bg-[white]">
              Kathryn <br />
              iOS Beta Tester
            </p>
          </div>
        </div>
        <div className="flex shadow-lg justify-center gap-y-3 p-4 bg-[white] flex-col rounded-3xl w-72 h-52 ">
          {" "}
          <p className="bg-[white] ">
            It’s a great app and I can’t wait to <br /> use it more and see what
            all <br /> content you add.
          </p>
          <img className="bg-[white] w-20" src={rate} alt="" />
          <div className="flex gap-4 items-center bg-[white]">
            <img className="bg-[white] w-5" src={applegreen} alt="" />
            <p className="bg-[white]">
              Gabriel <br />
              iOS Beta Tester
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
