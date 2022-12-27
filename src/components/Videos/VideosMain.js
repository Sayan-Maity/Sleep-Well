import React, { useState, useContext } from "react";
import Header from "../Header";
import Categories from "./Categories";
import Video from "./Video";
import LightModeContext from "../../contexts/LightMode-context";
import "../../App.css";

function VideosMain() {
  const { lightMode } = useContext(LightModeContext);

  const [video, setVideo] = useState([]);

  return (
    <>
      <div className={`${lightMode ? "img-wrap-light" : "img-wrap"} main-font`}>
        <div className={`${lightMode ? "main-bg-light" : "main-bg"} main-font`}>
          <Header />
          <Video video={video} />
          <Categories setVideo={setVideo} />
        </div>
      </div>
    </>
  );
}

export default VideosMain;
