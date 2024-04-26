import React from "react";
import { MediaPlayer } from "./VideoStyle";
const Video = ({ videoSrc }) => {
    console.log(videoSrc);
    return (
        // <MediaPlayer controls>
        //     <source src={videoSrc} type="video/mp4"></source>
        //     <source src={videoSrc} type="video/ogg"></source>

        // </MediaPlayer>
        <iframe
            width="350"
            height="240"
            src={videoSrc}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
};

export default Video;
