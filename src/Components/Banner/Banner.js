import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/constants";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setMovie(response.data.results[2]);
      }).catch((err)=>{
        console.log(err)
      })
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie?.backdrop_path : "https://res.cloudinary.com/dwucedjmy/image/upload/v1682954796/preloader_1_q5ifpd.gif"})`,
        // backgroundImage: `url(https://res.cloudinary.com/dwucedjmy/image/upload/v1682954796/preloader_1_q5ifpd.gif)`,
      }}
      className='banner'
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.original_name : ""}</h1>
        <div className='parentbutton'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className='fade_bott'></div>
    </div>
  );
}

export default Banner;
