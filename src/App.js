import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LikedPictures from "./pages/LikedPictures";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked-pictures" element={<LikedPictures />} />
    </Routes>
  );
};

export default App;
