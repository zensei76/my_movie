import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().required("why not fill title ? 😅"),
  poster: yup.string().url().required("why not fill poster url ? 😅"),
  rating: yup
    .number()
    .required("why not rate movie ? 😅")
    .min(1, "need better rating 😅 ")
    .max(10, "rated too high 😛"),
  summary: yup.string().required("why not fill this summary  ? 😅"),
  trailer: yup.string().url().required("why not fill trailer link ? 😅"),
});

export function EditMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(() => getMovie() ,[]); // eslint-disable-line react-hooks/exhaustive-deps

  return movie ? <EditMovieForm movie={movie} /> : "Loding...";
}

function EditMovieForm({ movie }) {
  const { handleSubmit, touched, errors, handleChange, handleBlur, values } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: movieValidationSchema,
      onSubmit: (updatedMovie) => {
        // console.log("onSubmit: ", updatedMovie);
        editMovie(updatedMovie);
      },
    });

  const navigate = useNavigate();

  const editMovie = (updatedMovie) => {
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
      <form className='add-movie-form' onSubmit={handleSubmit}>
        <TextField
          label='Name'
          variant='standard'
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          // error
          helperText={touched.name ? errors.name : null}
        />

        <TextField
          label='Poster'
          variant='standard'
          name='poster'
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          // error
          helperText={touched.poster ? errors.poster : null}
        />

        <TextField
          label='Rating'
          variant='standard'
          name='rating'
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          // error
          helperText={touched.rating ? errors.rating : null}
        />
        <TextField
          label='Summary'
          variant='standard'
          name='summary'
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.summary ? errors.summary : null}
        />
        <TextField
          label='Trailer'
          variant='standard'
          name='trailer'
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.trailer ? errors.trailer : null}
        />
        {/* <h1>{errors}</h1> */}
        <Button variant='outlined' color="success" type='submit'>
          Save
        </Button>
      </form>
    </div>
  );
}

// export function EditMovie() {
//   const { id } = useParams();

//   // const movie = movieList[id]; used before api call for local data

//   const [movie, setMovie] = useState(null);

//   const getMovie = () => {
//     fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies/${id}`, {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mv) => setMovie(mv));
//   };
//   useEffect(() => getMovie());

//   return(movie ? <EditMovieForm movie = {movie}/>: "Loding...");
// }

// function EditMovieForm({movie}) {
//   const [name, setName] = useState(movie.name);
//   const [poster, setPoster] = useState(movie.poster);
//   const [rating, setRating] = useState(movie.rating);
//   const [summary, setSummary] = useState(movie.summary);
//   const [trailer, setTrailer] = useState(movie.trailer);

//   const navigate = useNavigate();

//   const editMovie = () => {
//     const updatedMovie = {
//       name: name,
//       poster: poster,
//       rating: rating,
//       summary: summary,
//       trailer: trailer,
//     };

//     //PUT
//     // 1.method - PUT(Method: The request method is either GET or POST.) and movie id
//     // 2. body - data & JSON (Body: The body can be any of the following: Body.array.Buffer(), Body.Blob(), Body.formData(), Body.json(), Body.text().
//     // 3. headers - mention passing json data

//     fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies/${movie.id}`, {
//       method: "PUT",
//       body: JSON.stringify(updatedMovie),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then(() => navigate("/movie"));
//   };
//   return (
//     <div>
//       <div className='add-movie-form'>
//         <TextField
//           label='Name'
//           variant='standard'
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//           value={name}
//         />

//         <TextField
//           label='Poster'
//           variant='standard'
//           placeholder='Poster-url'
//           onChange={(event) => {
//             setPoster(event.target.value);
//           }}
//           value={poster}
//         />

//         <TextField
//           label='Rating'
//           variant='standard'
//           placeholder='1 - 10'
//           onChange={(event) => {
//             setRating(event.target.value);
//           }}
//           value={rating}
//         />
//         <TextField
//           label='Summary'
//           variant='standard'
//           onChange={(event) => {
//             setSummary(event.target.value);
//           }}
//           value={summary}
//         />
//         <TextField
//           label='Trailer'
//           variant='standard'
//           onChange={(event) => {
//             setTrailer(event.target.value);
//           }}
//           value={trailer}
//         />

//         <Button variant='outlined' onClick={editMovie} color='success'>
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// }
