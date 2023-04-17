import { Movie } from "./Movie";
import { useState } from "react";

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
        <input
          placeholder='Name'
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
        <input
          placeholder='Poster'
          onChange={(event) => {
            setPoster(event.target.value);
          }}
          value={poster}
        />
        
        <input
          placeholder='Raitings'
          onChange={(event) => {
            setRatings(event.target.value);
          }}
          value={ratings}
        />
        <input
          placeholder='Summary'
          onChange={(event) => {
            setSummary(event.target.value);
          }}
          value={summary}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <div className='movie-list'>
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
