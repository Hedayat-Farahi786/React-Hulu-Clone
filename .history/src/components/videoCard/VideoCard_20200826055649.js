import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const imgUrl = "https://image.tmdb.org/t/p/original";

const VideoCard = ({ movie }) => {
  //{movie.release_date || movie.first_air_date}
  return (
    <div className="videoCard">
      <img
        src={`${imgUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p>
          {movie.media_type && movie.media_type }
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
};

export default VideoCard;
