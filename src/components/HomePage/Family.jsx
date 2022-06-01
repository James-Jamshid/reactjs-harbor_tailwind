import React from "react";
import first from "../assets/img/Frame.png";
import sec from "../assets/img/Frame2.png";
import third from "../assets/img/Frame3.png";
import fourth from "../assets/img/Frame4.png";

const Family = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#F9F7F4]">
      <div className="flex   items-center justify-center flex-col gap-y-10">
        <h2 className="text-3xl">
          The right plan for when <br /> things don't go as planned
        </h2>
        <p>
          Not prepared? You're not alone. Emergency planning is <br />{" "}
          overwhelming. We work with experts to make the hard parts easy, so{" "}
          <br /> you can have confidence when it matters most.
        </p>
        <div className="grid grid-cols-2 gap-2 ">
          <img className="flex pt-[115px] w-[400] h-[800]" src={first} alt="" />
          <img className="w-[400] h-[800]" src={sec} alt="" />
          <img className="w-[400] h-[800]" src={third} alt="" />
          <img className="w-[400] h-[800]" src={fourth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Family;
