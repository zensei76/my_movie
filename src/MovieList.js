import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { EditMovie } from "./EditMovie";


export function MovieList() {
  const url = "https://64970eb083d4c69925a361bf.mockapi.io/movies";
  const navigate = useNavigate()
  const [movieList, setMovieList] = useState([]);
  
  const getMovies = () => {
    fetch(url, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {

    //Delete ---> Refresh data
  
    fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(()=> getMovies());
  };

  return (
    <div>
      {/* <AddMovie /> */}
      <div className='movie-list'>
        {movieList.map((mv, index) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            // setMovieList={setMovieList}
            // movieList={movieList}
            deleteButton={
              <IconButton onClick={() => deleteMovie(mv.id)}>
                <DeleteIcon />
              </IconButton>
            }

            editButton = {
               <IconButton onClick={()=> navigate(`/movie/edit/${mv.id}`)}>
                  <EditIcon />
               </IconButton>
            }


          />
        ))}
        {/* { console.log(setMovieList)} */}
      </div>
    </div>
  );
}



