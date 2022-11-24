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
          alt={url}
          className="rounded-sm object-cover scale-100"
          style={{ height: "350px", width: "100%" }}
        />
        {postHovered && (
          <>
            <div
              className="absolute top-1/3  w-full h-full flex flex-col justify-between p-1  pt-2 pb-2 z-50"
              style={{ height: "100%" }}
            >
              <div className="flex items-center justify-center ">
                <div className="flex gap-2">
                  {liked ? (
                    <button
                      type="button"
                      className="opacity-75 hover:opacity-100 hover:shadow-md cursor-pointer"
                      onClick={() => {
                        setLiked(false);
                      }}
                    >
                      <BsHeartFill
                        fontSize={80}
                        className="text-red-600 border-black shadow-sm m-2"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="opacity-75 hover:opacity-100 hover:shadow-md cursor-pointer"
                      onClick={() => {
                        setLiked(true);
                      }}
                    >
                      <AiOutlineHeart fontSize={80} />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div
              className="absolute top-0 right-0 w-full h-full flex flex-col  p-1  pt-2 pb-2 z-50"
              style={{ height: "100%" }}
            >
              <div className="flex justify-end">
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
