import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/videoEudisity.mp4";

const VideoPlayer = ({ showVideo, setShowVideo }) => {
    const videoContainer = useRef(null);

    const clickHandler = (e) => {
        if(e.target == videoContainer.current) {
            setShowVideo(false);
        }
    }
  return (
    showVideo && (
      <div className="video-player" onClick={clickHandler} ref={videoContainer}>
        <video src={video} autoPlay muted controls ></video>
      </div>
    )
  );
};

export default VideoPlayer;
