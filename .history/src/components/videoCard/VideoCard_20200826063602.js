import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const imgUrl = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  //{movie.release_date || movie.first_air_date}
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${imgUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <h2>{movie.title || movie.original_name}</h2>
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <p className="videoCardStats">
        {movie.media_type && movie.media_type}
        {movie.release_date || movie.first_air_date}
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
