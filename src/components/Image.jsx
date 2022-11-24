import React, { useState } from "react";

import { BsHeartFill, BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Modal from "./Modal";

const Image = ({ url, id }) => {
  const [postHovered, setPostHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        className="relative w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
      >
        <img
          src={url}
          alt="nature"
          className="rounded-lg w-full object-cover"
          style={{ height: "450px", width: "450px" }}
        />
        {postHovered && (
          <>
            <div
              className="absolute top-1/2 left-1/2 w-full h-full flex flex-col justify-between p-1  pt-2 pb-2 z-50"
              style={{ height: "100%" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {liked ? (
                    <button
                      type="button"
                      className="opacity-75 hover:opacity-100 hover:shadow-md"
                      onClick={() => {
                        setLiked(false);
                      }}
                    >
                      <BsHeartFill
                        fontSize={40}
                        className="text-red-600 border-black shadow-sm m-2"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="opacity-75 hover:opacity-100 hover:shadow-md"
                      onClick={() => {
                        setLiked(true);
                      }}
                    >
                      <AiOutlineHeart fontSize={40} />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-1  pt-2 pb-2 z-50"
              style={{ height: "100%" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowModal(true)}
                    className="cursor-pointer opacity-75 hover:opacity-100 hover:shadow-md"
                  >
                    <BsArrowsFullscreen fontSize={20} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Modal
        visible={showModal}
        onClose={handleOnClose}
        liked={liked}
        url={url}
      />
    </div>
  );
};

export default Image;
