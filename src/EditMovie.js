import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";

export function EditMovie() {
  const { id } = useParams();

  // const movie = movieList[id]; used before api call for local data

  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(() => getMovie(), []);


  return(movie ? <EditMovieForm movie = {movie}/>: "Loding...");
}

function EditMovieForm({movie}) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [ratings, setRatings] = useState(movie.ratings);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const editMovie = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      ratings: ratings,
      summary: summary,
      trailer: trailer,
    };


    //PUT
    // 1.method - PUT(Method: The request method is either GET or POST.) and movie id
    // 2. body - data & JSON (Body: The body can be any of the following: Body.array.Buffer(), Body.Blob(), Body.formData(), Body.json(), Body.text().
    // 3. headers - mention passing json data
    

    fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movie"));
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
        <TextField
          label='Trailer'
          variant='standard'
          onChange={(event) => {
            setTrailer(event.target.value);
          }}
          value={trailer}
        />

        <Button variant='outlined' onClick={editMovie} color='success'>
          Save
        </Button>
      </div>
    </div>
  );
}
