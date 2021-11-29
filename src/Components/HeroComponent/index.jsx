import React from "react";
// import { FiBookOpen, FiChevronRight } from "react-icons/fi";
// import { RiPagesLine } from "react-icons/ri";
// import { ImDrawer2 } from "react-icons/im";

const HeroComponent = () => {
  return (
    <>
      <div className="w-full h-full relative bg-gray-100  gap-48">
        <div className="w-full h-96 ">
          <img
            // src="https://content3.jdmagicbox.com/comp/agartala/y2/9999px381.x381.101031123439.a6y2/catalogue/tripura-institute-of-technology-agartala-airport-agartala-colleges-yjxz01dhys.jpg?clr=523d14"
            src="https://lh3.ggpht.com/p/AF1QipM6__BoCgPI1tA7S4ZiVR3Qf0whobtGosTGDLvw=s1024"
            alt="banner"
            className="w-full h-full object-fill"
          />
        </div>
        <div className=" w-1/2 h-56 bg-gray-900 text-white rounded-lg  flex flex-col bg-opacity-75 absolute  mt-12 ml-5 inset-1 px-8 pt-10 ">
          <h1 className="py-2 font-bold text-3xl ">
            A one stop portal for Placements
          </h1>
          <p className="pb-8">
            Welcome to the recruitment website For TIT Agartala. Tripura
            Institute of Technology is India's foremost industrial leadership
            development institution. Our Graduates are a combination of rigorous
            thinking, hardwork and fundamental stronghold. They are nurtured by
            the institute to strive for excellence and deliver impact in their
            field of work. Let us begin...
          </p>
        </div>
        <div className="flex flex-col w-40  absolute top-20 right-10 gap-6">
          <button className="bg-blue-600 ... ring-4 ring-indigo-300 rounded-md text-white text-xl h-16 font-semibold">
            Student
          </button>
          <button className="bg-blue-600 ... ring-4 ring-indigo-300 rounded-md text-white text-xl h-16 font-semibold">
            Recruiter
          </button>
          <button className="bg-blue-600 ... ring-4 ring-indigo-300 rounded-md text-white text-xl h-16 font-semibold">
            Coordinator
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
