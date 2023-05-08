import { useParams, useNavigate } from "react-router-dom";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Button from '@mui/material/Button';


export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movieList[id];

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
        frameborder='0'
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
