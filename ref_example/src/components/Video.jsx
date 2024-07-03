import React, { useRef, useState } from "react";
import Kalki from "./kalki.mp4";

const Video = () => {
  let [play, setPlay] = useState(true);
  let videoRef = useRef();

  let playOrPause = () => {
    setPlay(!play); // toggle
    if (play === true) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <section id="videoBlock">
      <article>
        <video src={Kalki} ref={videoRef}></video>
        <button onClick={playOrPause}>{play ? "play" : "pause"}</button>
      </article>
    </section>
  );
};

export default Video;
