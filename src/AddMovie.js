// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

//----------------------------Using  Formik----------------------------
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
export function AddMovie() {
  const { handleSubmit, touched, errors, handleChange, handleBlur, values } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("onSubmit: ", newMovie);
        addMovie(newMovie);
      },
    });

  const navigate = useNavigate();

  const addMovie = (newMovie) => {
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
        <Button variant='outlined' type='submit'>
          Add Movie
        </Button>
      </form>
    </div>
  );
}

//----------------------------Without Formik----------------------------
// export function AddMovie({ movieList, setMovieList }) { // for local data
// export function AddMovie() { // for api realtime data
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [trailer, setTrailer] = useState("");

//   const navigate = useNavigate();

//   const addMovie = () => {
//     const newMovie = {
//       name: name,
//       poster: poster,
//       rating: rating,
//       summary: summary,
//       trailer: trailer,
//     };

//     // copy movieList and add newMovie to it
//     // if (name && summary) {
//     //   setMovieList([...movieList, newMovie]);
//     // }

//     //POST
//     // 1.method - POST(Method: The request method is either GET or POST.)
//     // 2. body - data & JSON (Body: The body can be any of the following: Body.array.Buffer(), Body.Blob(), Body.formData(), Body.json(), Body.text().
//     // 3. headers - mention passing json data

//     fetch(`https://64970eb083d4c69925a361bf.mockapi.io/movies`, {
//       method: "POST",
//       body: JSON.stringify(newMovie),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then(() => navigate("/movie"));

//     // console.log(movieList)
//     setName("");
//     setPoster("");
//     setRating("");
//     setSummary("");
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

//         <Button variant='outlined' onClick={addMovie}>
//           Add Movie
//         </Button>
//       </div>
//     </div>
//   );
// }
