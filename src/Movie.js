import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export function Movie({ movie, id }) {
  const [show, setShow] = useState(true);

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  // const paraStyles = {
  //   visibility: show ? "visible" : "hidden",
  // };

  // navigate is just a variable name no keyword here
  const navigate = useNavigate();

  return (
    <div className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}</h2>

        <IconButton
          aria-label='movie details'
          color='info'
          onClick={() => navigate(`/movie/${id}`)}
        >
          <InfoIcon />
        </IconButton>

        <IconButton
          aria-label='Movie-Details'
          color='primary'
          onClick={() => setShow(!show)}
        >
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>

        <p style={styles} className='movie-rating'>
          ⭐{movie.rating}
        </p>
      </div>

      {/* Conditional Styling  */}
      {/* <p className='movie-summary' style={paraStyles}>
              {movie.summary}
            </p> */}

      {/* Conditional Rendering  */}
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
