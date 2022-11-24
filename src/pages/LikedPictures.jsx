import React from "react";
import { useNavigate } from "react-router-dom";

import home from "../assets/home.svg";
import Image from "../components/Image";

const LikedPictures = (url) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-150">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-4xl font-bold mt-3 ml-5 p-5">Liked images</h1>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        >
          <img
            src={home}
            alt="home-button"
            className="w-8 h-8 items-center m-5 mr-8 mt-8"
          />
        </button>
      </div>

      <div className="grid grid-cols-4 grid-row-4 gap-3 mt-10">
        <Image url={url} />
      </div>
    </div>
  );
};

export default LikedPictures;
