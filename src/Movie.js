import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ movie }) {
  const [show, setShow] = useState(true);

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  // const paraStyles = {
  //   visibility: show ? "visible" : "hidden",
  // };

  return (
    <div className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p style={styles} className='movie-rating'>
          ⭐{movie.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Summary</button>

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
