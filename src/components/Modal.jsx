import React from "react";

import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";

const Modal = ({ visible, onClose, liked, url }) => {
  const handleClose = (e) => {
    if (e.target.id === "picture") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="picture"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="bg-white p-10 rounded-lg relative">
        <img
          src={url}
          alt="random"
          style={{ width: "500px", height: "500px" }}
          className="object-cover"
        />
        <button
          type="button"
          className="absolute top-0 right-0 mt-2 mr-2"
          onClick={onClose}
        >
          <AiOutlineClose fontSize={21} />
        </button>
        {liked ? (
          <button
            type="button"
            className="absolute  opacity-80 hover:opacity-100 hover:shadow-md cursor-pointer"
            //   To do - make clicking on like functional !
            onClick={() => {}}
          >
            <BsHeartFill
              fontSize={70}
              className="text-red-600 border-black shadow-sm m-2 "
            />{" "}
          </button>
        ) : (
          <button
            type="button"
            className="absolute top-1/2 left-1/2 opacity-80 hover:opacity-100 hover:shadow-md cursor-pointer"
            //   To do - make clicking on like functional !
            onClick={() => {}}
          >
            <AiOutlineHeart fontSize={70} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
