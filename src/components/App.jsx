import React from "react";
import Bottom from "./HomePage/Bottom";
import Child from "./HomePage/Child";
import Family from "./HomePage/Family";
import Footer from "./HomePage/Footer";
import Mail from "./HomePage/Mail";
import Navbar from "./HomePage/Navbar";
import Wrapper from "./HomePage/Wrapper";

const HomePage = () => {
  return (
    <div className=" ">
      <Navbar />
      <Wrapper />
      <Family />
      <Child />
      <Bottom />
      <Mail />
      <Footer />
    </div>
  );
};

export default HomePage;
