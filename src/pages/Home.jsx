import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsSearch, BsHeartFill } from "react-icons/bs";
import Image from "../components/Image";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [portrait, setPortrait] = useState(false);
  const [images, setImages] = useState([]);

  // const getLikes = (likes) => {
  //   console.log(likes);
  // };

  const baseURL =
    "https://pixabay.com/api/?key=26032813-5eca57a90774446a771ac3a81";

  let url = `${baseURL}&q=${searchTerm}&image_type=photo`;

  const handleSearch = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        console.log(data);
      });
  };

  const orientation = () => {
    if (images.imageWidth > images.imageHeight) {
      setPortrait(false);
    } else {
      setPortrait(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    handleSearch();
    console.log(portrait);
    setLoading(false);
  }, [url]);

  if (loading)
    return (
      <h2 className="flex justify-center items-center">Loading pictures...</h2>
    );

  return (
    <div>
      <div className="w-full h-50 bg-gray-100 flex p-5">
        <div className="flex m-auto items-center bg-white w-150 rounded-lg outline-none shadow-md">
          <BsSearch
            fontSize={22}
            className="ml-2 cursor-pointer opacity-75 hover:opacity-100"
            onClick={handleSearch}
          />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={handleSearch}
            placeholder="Search"
            value={searchTerm}
            className="ml-2 p-2 w-full outline-none rounded-lg"
          />
        </div>
        <div className="relative flex justify-end items-center">
          <button
            className="cursor-pointer p-3 mt-2"
            onClick={() => {
              navigate("/liked-pictures");
            }}
          >
            <BsHeartFill fontSize={26} />
            {/* <p className="absolute top-2 right-0 w-5 h-5 text-center bg-red-500 rounded-full text-white">
              {getLikes}5
            </p> */}
            <p className="absolute top-2 right-0 w-5 h-5 text-center bg-red-500 rounded-full text-white">
              5
            </p>
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 grid-flow-row gap-2 mt-5">
          {images?.hits?.map((image) => (
            <div
              key={image?.id}
              className={`${image?.portrait ? "row-span-2" : ""}`}
            >
              {/* <Image url={image?.webformatURL} id={image?.id} getLikes={getLikes} /> */}
              <Image url={image?.webformatURL} id={image?.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
