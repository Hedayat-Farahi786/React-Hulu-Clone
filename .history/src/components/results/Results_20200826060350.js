import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "../videoCard/VideoCard";
import axios from "../../utils/axios";
import requestsUrl from "../../utils/requestsUrl";

const Results = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestsUrl.fetchAction);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, []);
  return (
    <div className="results">
      {movies.map((m) => (
        <VideoCard movie={m} />
      ))}
    </div>
  );
};

export default Results;
