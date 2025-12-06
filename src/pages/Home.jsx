import React from "react";
import Slider from "../component/Slider";
import "animate.css";
import ShopByCategory from "../component/ShopByCategory";
import RecentAdded from "../component/RecentAdded";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <h1
        className="
        animate__animated animate__zoomIn
         text-center
         text-2xl md:text-4xl lg:text-4xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent py-3"
      >
        Welcome to PowMart
      </h1>

      <Slider />
      <ShopByCategory/>
      <RecentAdded/>
    </div>
  );
};

export default Home;
