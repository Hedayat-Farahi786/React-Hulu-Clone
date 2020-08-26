import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "../videoCard/VideoCard";
import Axios from "axios";
import requestsUrl from "../../utils/requestsUrl";
import {BaseUrl} from "../../utils/apiCalls"


const Results = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(BaseUrl.fetchAction);
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
