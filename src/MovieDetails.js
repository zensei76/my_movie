import { useParams, useNavigate } from "react-router-dom";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';


export function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // const movie = movieList[id]; used before api call for local data

  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(() => getMovie(), []);

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  return (
    <div>
      <iframe
        width='800'
        height='450'
        src={movie.trailer}
        title='Solo Leveling | OFFICIAL TEASER'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <div className='movie-details-container'>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}</h2>

          <p style={styles} className='movie-rating'>
            ⭐{movie.rating}
          </p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
      </div>


      <Button startIcon ={ <KeyboardReturnIcon />} variant="outlined"className='back-button' onClick={() => navigate(-1)}>
        Back
      </Button>

    </div>
  );
}
