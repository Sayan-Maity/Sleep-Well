import React from "react";
import DefaultImg from "./DefaultImg";
import VideoItem from "./VideoItem";

const Video = ({ video }) => {
  const renderedVideo = video.map((videoItem, index) => {
    return (
      <div key={index} className="">
        <VideoItem videoItem={videoItem} />
      </div>
    );
  });

  if (video.length === 0) {
    return <DefaultImg />;
  }
  return <>{renderedVideo}</>;
};

export default Video;
