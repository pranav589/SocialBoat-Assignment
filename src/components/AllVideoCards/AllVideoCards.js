import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./AllVideoCards.css";

function AllVideoCards({ videos }) {
  return (
    <div className="allVideoCards">
      {videos?.map((video) => (
        <VideoCard video={video} key={video?.heading} />
      ))}
    </div>
  );
}

export default AllVideoCards;
