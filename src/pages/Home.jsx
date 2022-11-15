import React from "react";

import marketdata from "../Datas/About";
import BannerMain from "../components/BannerMain";
import image from "../assets/images/banner.png";


const slogan = marketdata.slogan;

const Home = () => {
  return (
    <main className="main">
      <BannerMain image={image} title={slogan} />
    </main>
  );
};

export default Home;