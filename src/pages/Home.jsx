import React from "react";

import marketdata from "../Datas/About";
import Bannermain from "../components/BannerMain";
import image from "../assets/images/banner.png";
import Realestate from "../components/Realestate";


const slogan = marketdata.slogan;

const Home = () => {
  return (
    <main className="main">
      <Bannermain image={image} title={slogan} />
      <Realestate />
    </main>
  );
};

export default Home;