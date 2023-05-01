import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import { imageUrl, API_KEY } from "../../Constants/constants";
import ContentLoader from 'react-content-loader'
import axios from "../../axios";
import "./Rowpost.css";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState({});
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
    origin: 'http://localhost:3000'
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response?.data?.results[0]);
        } else {
          console.log("Array Empty");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleMovie(movie.id)}
              src={
                movie.backdrop_path
                  ? `${imageUrl + movie.backdrop_path}`
                  : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
              alt='poster'
              className={props.isSmall ? "small-poster" : "poster"}
            />
          );
        })}
      </div>
      {urlId.key && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
