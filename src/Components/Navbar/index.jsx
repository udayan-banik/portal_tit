import React from "react";

const NavLG = () => {
  return (
    <>
      <div className="w-full bg-blue-800 drop-shadow-2xl ">
        <div className="w-full h-16  flex justify-between ">
          <div className="w-full flex gap-3   ">
            <div className="w-22 p-1 ml-10 ">
              <img
                src="https://secureservercdn.net/160.153.138.177/p5p.dc5.myftpupload.com/wp-content/themes/iMagMag/images/logo.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-white my-3 text-2xl font-semibold">
              Placements, TIT
            </h1>
          </div>
          <div className="flex w-full justify-between text-white text-lg mr-10">
            <button className="font-semibold">
              <a href=" ">Why Recruit</a>
            </button>
            <button className="font-semibold">
              <a href=" ">Director's Message</a>
            </button>
            <button className="font-semibold">
              <a href=" ">Overview</a>
            </button>
            <button className="font-semibold">
              <a href=" ">Recruitment process</a>
            </button>
            <button className="font-semibold">
              <a href=" ">Contact Us</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <NavLG />
    </>
  );
};

export default Navbar;
