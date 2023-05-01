import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import { imageUrl, API_KEY } from "../../Constants/constants";
import axios from "../../axios";
import "./Rowpost.css";
function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results);
      })
      .catch((err) => {
        alert("error found");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array Empty");
        }
      });
  };
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            src={`${imageUrl + obj.backdrop_path}`}
            alt='poster'
            className={props.isSmall ? "small-poster" : "poster"}
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;