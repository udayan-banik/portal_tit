import React from "react";

//Componnets
import Navbar from "../Components/Navbar";
import HeroComponent from "../Components/HeroComponent";
import Overview from "../Components/OverView";
import Recruit from "../Components/whyRecruit";
// import Cardsect from "../Components/Cardsect";
import Footer from "../Components/Footer";
import LoginLayout from "./LoginLayout";

const DefaultLayout = (props) => {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <HeroComponent />
        <Overview />
        <Recruit />
        <LoginLayout />
        <Footer />

        {props.children}
      </div>
    </>
  );
};

export default DefaultLayout;
