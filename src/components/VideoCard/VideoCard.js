import { Chip } from "@mui/material";
import React from "react";
import "./VideoCard.css";

function VideoCard({ video }) {
  return (
    <div className="video">
      <video src={video?.video} controls />
      <div className="video__details">
        <p>{video?.heading}</p>
        <div className="video__tags">
          {video?.tags.map((tag, index) => (
            <Chip label={tag} variant="outlined" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
