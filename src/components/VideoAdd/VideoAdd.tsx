import React from "react";
import video from "../../assets/addVideo.mp4";

function VideoAdd() {
  return (
    <div>
      <video autoPlay loop muted controls>
        <source type='video/mp4' src={video} />
      </video>
    </div>
  );
}

export default VideoAdd;
