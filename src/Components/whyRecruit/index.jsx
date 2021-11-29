import React from "react";
import {
  AiOutlineShareAlt,
  AiOutlineStar,
  AiOutlineSelect,
} from "react-icons/ai";
import { RiSuitcaseLine } from "react-icons/ri";
const Recruit = () => {
  return (
    <>
      <div className="bg-blue-900 text-white w-full flex-col h-full flex items-center mt-24 py-18 gap-16">
        <div className="flex flex-col gap-6 item-center px-10 mt-8">
          <h1 className="text-center text-3xl font-semibold ">
            Why TIT Agartala
          </h1>
          <h2 className="justify-text text-center">
            Established in 1958, as an institute of national importance, IIT
            Bombay is recognized worldwide as a leader in the field of research
            and education in engineering and sciences. Our mission is to create
            an ambience in which new ideas and creativity flourish. The motto of
            IIT Bombay is to provide learning blended with excellence, to create
            leaders of tomorrow. The dynamic and constantly evolving academic
            program reflects the institute's commitment to stay in tune with the
            expanding frontiers of knowledge worldwide. Extracurricular
            activities are also treated with equal importance towards overall
            development making the students at IIT Bombay fit to take on the
            challenges faced in the competitive corporate world. Backed by the
            support of Alumni in different sectors and guidance of esteemed
            professors, we strive to offer highly nurturing environment to all
            it’s students.
          </h2>
        </div>
        <div className="flex gap-6 item-center px-20 mb-8">
          <div className="w-full flex flex-col items-center py-2 h-full gap-4 ">
            <AiOutlineShareAlt className="" />
            <h1 className="text-xl font-semibold">Alumni</h1>
            <h3 className="justify-text text-center">
              Our Alumni have emerged successful and excelled in varied
              professions across the globe. This network is highly enriching for
              the growth of our community
            </h3>
            <button className="bg-white p-2  rounded-md text-md text-gray-900 ">
              Know more
            </button>
          </div>
          <div className="w-full flex flex-col items-center py-2 h-full gap-4 ">
            <AiOutlineStar className="" />
            <h1 className="text-xl font-semibold">Rankings</h1>
            <h3 className="justify-text text-center">
              Recognized as India’s No. 1 University, we strive for excellence.
              Our rankings are reflective of our steep progress
            </h3>
            <button className="bg-white p-2  rounded-md text-md text-gray-900 ">
              Know more
            </button>
          </div>
          <div className="w-full flex flex-col items-center py-2 h-full gap-4">
            <AiOutlineSelect className="" />
            <h1 className="text-xl font-semibold">Selection Process</h1>
            <h3 className="justify-text text-center">
              All the students enrolled at IIT Bombay are selected after
              rigorous screening process. It ensures that we nurture India’s few
              most brilliant minds
            </h3>
            <button className="bg-white p-2  rounded-md text-md text-gray-900 ">
              Know more
            </button>
          </div>
          <div className="w-full flex flex-col items-center py-2 h-full gap-4 ">
            <RiSuitcaseLine className="" />
            <h1 className="text-xl font-semibold">All round development</h1>
            <h3 className="justify-text text-center">
              One’s skills, aptitude and perception reflect the personality of
              an individual. We offer numerous opportunities for multi
              dimensional growth of an individual
            </h3>
            <button className="bg-white p-2  rounded-md text-md text-gray-900 ">
              Know more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruit;
