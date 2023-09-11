import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        if (request?.data?.results && request.data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * request.data.results.length);
          setMovie(request.data.results[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backgroundUrl = `http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;

  return (
    <div className="banner__main"><header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: "50% 10%",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.name || movie?.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">{movie?.overview}</div>
      </div>
    </header>
    </div>
  );
}

export default Banner;
