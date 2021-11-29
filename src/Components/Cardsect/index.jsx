import React from "react";
import { AiFillLike, AiFillDislike, AiOutlineShareAlt } from "react-icons/ai";
import { RiUserFollowFill } from "react-icons/ri";
function Cardsect() {
  return (
    <>
      <div className="w-full h-48 m-8 ">
        <div className=" w-96 rounded-xl p-2 h-96 border border-gray-700 ">
          <div className="pl-1">
            <div className="flex  gap-3">
              <div className="w-18 h-18">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
                  alt="profilePic"
                  className="h-8 w-8"
                />
              </div>
              <div className="flex gap-2 mt-1 font-bold">
                <h1>Udayan Banik</h1>
                <h1>•</h1>
                <h1>3rd+</h1>
              </div>
            </div>
            <div>
              <h2 className="text-md font-semibold">
                Hello Everyone!! I am extremely delighted to share that I have
                joined Paytm as Back-end Software Engineer.
              </h2>
            </div>
          </div>

          <div className="w-full h-56 p-1 filter drop-shadow-xl">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt="postImage"
              className="w-full h-full rounded-lg"
            />
            <div className="flex justify-between mt-3">
              <span className="flex justify-between gap-2 ">
                <AiFillLike
                  style={{ fill: "red" }}
                  className="border border-gray-500 w-10 h-6 rounded-md"
                />
                <AiFillDislike
                  style={{ fill: "gray" }}
                  className="border border-gray-500 w-10 h-6 rounded-md"
                />
              </span>
              <span className="flex justify-between gap-2 ">
                <AiOutlineShareAlt
                  style={{ fill: "green" }}
                  className="border border-gray-500 w-10 h-6 rounded-md "
                />
                <RiUserFollowFill
                  style={{ fill: "blue" }}
                  className="border border-gray-500 w-10 h-6 rounded-md"
                />
              </span>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </>
  );
}

export default Cardsect;
