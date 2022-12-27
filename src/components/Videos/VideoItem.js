import React from "react";
import ReactPlayer from "react-player/youtube";


function VideoItem({ videoItem }) {
  const mainImg = "https://source.unsplash.com/random/?night";

  let randomNum = Math.floor(Math.random() * 11);
  const videoSrc = `https://www.youtube.com/embed/${videoItem.data.items[randomNum].id.videoId}`;

  const playing = true;



  return (
    <>
      <div
        className="h-full bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${mainImg})`,
        }}
      >
        <ReactPlayer
          url={videoSrc}
          config={{
            youtube: {
              playerVars: {
                color: "white",
                modestbranding: true,
                showinfo: 1,
              },
            },
          }}
          volume={0.5}
          light={false}
          height="100vh"
          width="100wh"
          muted={false}
          style={{ opacity: "0" }}
          playing={playing}
        />
      </div>
    </>
  );
}

export default VideoItem;
