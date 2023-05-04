import { Movie } from "./Movie";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [ratings, setRatings] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      ratings: ratings,
      summary: summary,
    };
    // copy movieList and add newMovie to it
    if (name && summary) {
      setMovieList([...movieList, newMovie]);
    }

    // console.log(movieList)
    setName("");
    setPoster("");
    setRatings("");
    setSummary("");
  };

  return (
    <div>
      <div className='add-movie-form'>
        <TextField
          label='Name'
          variant='standard'
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />

        <TextField
          label='Poster'
          variant='standard'
          placeholder='Poster-url'
          onChange={(event) => {
            setPoster(event.target.value);
          }}
          value={poster}
        />

        <TextField
          label='Ratings'
          variant='standard'
          placeholder='1 - 10'
          onChange={(event) => {
            setRatings(event.target.value);
          }}
          value={ratings}
        />
        <TextField
          label='Summary'
          variant='standard'
          onChange={(event) => {
            setSummary(event.target.value);
          }}
          value={summary}
        />

        <Button variant='outlined' onClick={addMovie}>
          Add Movie
        </Button>
      </div>

      <div className='movie-list'>
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
