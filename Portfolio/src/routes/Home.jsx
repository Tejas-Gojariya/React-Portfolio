import React from "react";
import HomeAnimation from "../Components/HomePage/HomeAnimation";
import HomePage from "../Components/HomePage/HomePage";

const Home = () => {
  return (
    <>
      <div className="z-30 relative">
        <HomeAnimation />
        <HomePage />
      </div>
    </>
  );
};

export default Home;
