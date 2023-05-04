import { Movie } from "./Movie";

export function MovieList({ movieList }) {
  return (
    <div>
      {/* <AddMovie /> */}
      <div className='movie-list'>
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
