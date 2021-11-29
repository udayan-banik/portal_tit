import React from "react";
import { FiBookOpen, FiChevronRight } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { ImDrawer2 } from "react-icons/im";

const Overview = () => {
  return (
    <>
      <div className="w-full h-full flex mt-24 gap-8">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-44 bg-white rounded-md mx-4 p-4 drop-shadow-2xl">
            <h1 className="text-xl font-semibold ">Academic Facilities</h1>
            <p>
              Academics at TIT Agartalay has the flexibility to evolve with ever
              changing requirements. Various activities are carried out to
              promote reasearch, enhance creativity, learn new skills, implement
              innovative solutions and .
            </p>
            <button className=" p-1 relative rounded-md text-md text-gray-600 hover:bg-gray-200 mt-3">
              See more
            </button>
          </div>
          <div className="w-full h-44 bg-white rounded-md mx-4 p-4 drop-shadow-3xl">
            <h1 className="text-xl font-semibold ">Academic Facilities</h1>
            <p>
              Academics at TIT Agartala has the flexibility to evolve with ever
              changing requirements. Various activities are carried out to
              promote reasearch, enhance creativity, learn new skills, implement
              innovative solutions and .
            </p>
            <button className=" p-1 relative rounded-md text-md text-gray-600 hover:bg-gray-200 mt-3">
              See more
            </button>
          </div>
        </div>
        <div className="w-full h-64 bg-white rounded-md p-4 mx-4 drop-shadow-2xl gap-2">
          <h1 className="text-xl font-semibold">Programs at TIT Agartala</h1>
          <h2 className="md:overflow-clip">
            TIT Agartala is known as a premier engineering, science and
            technology institute in India. Currently, it offers an opportunity
            to learn in 20 varied departments and pursue 10 programs. This
            university has strived and evolved over years to offer the students
            finest of its facilities for multi dimensional growth. It is a home
            for design, management school and several emerging centres in
            technical, non-technical & entrepreneurial sector
          </h2>
          <button className="bg-blue-900 p-1 relative rounded-md text-md text-white mt-3">
            Know more
          </button>
        </div>
        <div className="w-full flex flex-col p-2 ">
          <div className="hover:shadow-lg px-6">
            <h1 className="w-full text-center text-3xl text-gray-500 font-semibold my-5 flex gap-4">
              <FiBookOpen className="" />
              <a href="/#">Placement Brochure 2020-21 </a>
              <FiChevronRight />
            </h1>
          </div>
          <div className="hover:shadow-lg px-6">
            <h1 className="w-full text-center text-3xl text-gray-500 font-semibold my-5 flex gap-4">
              <RiPagesLine />
              <a href="/#">Placement Brochure 2020-21</a>
              <FiChevronRight />
            </h1>
          </div>
          <div className="hover:shadow-lg px-6">
            <h1 className="w-full text-center text-3xl text-gray-500 font-semibold my-5 flex gap-4">
              <ImDrawer2 />
              <a href="/#">Placement Brochure 2020-21</a>
              <FiChevronRight />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
