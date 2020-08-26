import React, { useState } from "react";
import "./Results.css";
import VideoCard from "../videoCard/VideoCard";

const Results = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div className="results">
      {movies.map((m) => (
        <VideoCard />
      ))}
    </div>
  );
};

export default Results;
