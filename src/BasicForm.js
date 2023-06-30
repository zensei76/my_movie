import * as yup from "yup";
import { useFormik } from "formik";

//----------------------------------------Formik without destructuring ----------------------------------------------------------------

// const formValidationSchema = yup.object({
//   email : yup.string().min(5).required().email(),
//   password : yup.string().min(8).max(12).required(),
// })

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: { email: "bhargav ", password: "" },
//     validationSchema: formValidationSchema,
//     onSubmit: (values) => {
//       console.log("onSubmit: " ,(values))
//     }

//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <h1>Basic Form : Formik practice</h1>
//       <input
//         type='email'
//         placeholder='email'
//         name="email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />{" "}

//       {/* Ony if user touches the form and moves away from the field then show error  */}

//       <span style={{color:"red"}}>{formik.touched.email ? formik.errors.email : null}</span>
//       <br />

//       <br />
//       <input
//         type='password'
//         placeholder='password'
//         name="password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />{" "}
//       <span style={{color:"red"}}>{formik.touched.password ? formik.errors.password : null}</span>
//       <br />
//       <br />
//       {/* <p>{JSON.stringify(formik.values)}</p> */}
//       {/* <p>{JSON.stringify(formik.touched)}</p> */}
//       <button type='submit'>submit</button>
//     </form>
//   );
// }

//----------------------------------------Formik with destructuring ----------------------------------------------------------------

// const passwordRegex = `/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/`;

const formValidationSchema = yup.object({
  email: yup.string().min(5).required().email(),
  password: yup
    .string()
    .min(8)
    .required()
    // .matches(
    //   passwordRegex,
    //   "minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    // ),
});

export function BasicForm() {
  const { handleSubmit, touched, errors, handleChange, handleBlur, values } =
    useFormik({
      initialValues: { email: "bhargav ", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit: ", values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <h1>Basic Form : Formik practice</h1>
      <input
        type='email'
        placeholder='email'
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />{" "}
      {/* Ony if user touches the form and moves away from the field then show error  */}
      <span style={{ color: "red" }}>
        {touched.email && errors.email ? errors.email : null}
      </span>
      <br />
      <br />
      <input
        type='password'
        placeholder='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />{" "}
      <span style={{ color: "red" }}>
        {touched.password && errors.email ? errors.password : null}
      </span>
      <br />
      <br />
      <p>{JSON.stringify(values.password)}</p>
      {/* <p>{JSON.stringify(touched)}</p> */}
      <button type='submit'>submit</button>
    </form>
  );
}
