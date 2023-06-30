import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// export function AddMovie({ movieList, setMovieList }) {
export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [ratings, setRatings] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      ratings: ratings,
      summary: summary,
      trailer: trailer,
    };

    // copy movieList and add newMovie to it
    // if (name && summary) {
    //   setMovieList([...movieList, newMovie]);
    // }

    //POST
    // 1.method - POST(Method: The request method is either GET or POST.)
    // 2. body - data & JSON (Body: The body can be any of the following: Body.array.Buffer(), Body.Blob(), Body.formData(), Body.json(), Body.text().
    // 3. headers - mention passing json data

    fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movie"));

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
        <TextField
          label='Trailer'
          variant='standard'
          onChange={(event) => {
            setTrailer(event.target.value);
          }}
          value={trailer}
        />

        <Button variant='outlined' onClick={addMovie}>
          Add Movie
        </Button>
      </div>
    </div>
  );
}
