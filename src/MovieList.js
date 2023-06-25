import { Movie } from "./Movie";

export function MovieList({ movieList , setMovieList}) {

  const url = "https://64970eb083d4c69925a361bf.mockapi.io/movies"
  fetch(url).then(data => data.json()).then((mvs)=> console.log(mvs)) 



  return (
    <div>
      {/* <AddMovie /> */}
      <div className='movie-list'>
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} setMovieList={setMovieList} movieList={movieList} />
         
        ))}
        {/* { console.log(setMovieList)} */}
      </div>
    </div>
  );
}
