import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import DeleteIcon from "@mui/icons-material/Delete";

export function Movie({
  movie,
  id,
  movieList,
  setMovieList,
  deleteButton,
  editButton,
}) {
  const [show, setShow] = useState(true);

  // console.log(movieList, id);
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  // const paraStyles = {
  //   visibility: show ? "visible" : "hidden",
  // };

  // navigate is just a variable name no keyword here
  const navigate = useNavigate();

  return (
    // <Card className='movie-container' style={{height : "min-content"}}>
    <Card className='movie-container' sx={{ height: "min-content" }}>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <CardContent>
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
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Counter />
        {/* <DeleteMovie
          movieList={movieList}
          movie={movie}
          id={id}
          setMovieList={setMovieList}
        /> */}
        <div>
          {editButton}
          {deleteButton}
        </div>
      </CardActions>
    </Card>
  );
}

//to delete a movie
// function DeleteMovie({ movieList, setMovieList, id, movie }) {
//   const deleteMovie = () => {
//     let deletedMovie = movieList.splice(id, 1);
//     setMovieList([...movieList]);
//     // console.log(`Deleted Movie: ${JSON.stringify(deletedMovie)}`);
//   };

//   return (
//     <IconButton onClick={deleteMovie}>
//       <DeleteIcon />
//     </IconButton>
//   );
// }
