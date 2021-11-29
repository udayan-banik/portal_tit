import React from "react";

function Footer() {
  return (
    <>
      <div className="bottom-0 w-full h-56 relative bg-blue-800 mt-24">
        <div className="flex w-full justify-around text-white text-md mr-10 mt-10">
          <button className="font-semibold">Why Recruit</button>
          <button className="font-semibold">Director's Message</button>
          <button className="font-semibold">Overview</button>
          <button className="font-semibold">Recruitment process</button>
          <button className="font-semibold">Contact Us</button>
        </div>
        <div className="p-8 text-center text-xs text-white mb-8">
          <p>
            © 2021 Redisk Tech. All Rights Reserved. TIT, and all related logos
            are service marks of, and all related visuals and elements are the
            property of, Tripura Institute of Technology, Agartala. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
