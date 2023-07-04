import React from "react";
import "./staff.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup"
import { useFormik } from "formik";


const StaffSignUp = () => {
  const navigate = useNavigate();
  let staffData = useFormik ({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      contact: "",
    },
    onSubmit: (values) => {
      console.log(values);

      const endpoint = "http://localhost:5000/staff/SignUp";
      axios.post(endpoint, values)  
       .then((response) => {
            if (response.data == "Data Saved") {
              navigate("/admin");
            }
    }).catch((err)=>{
       console.log(err);
    })
    ;
  },
  validationSchema: yup.object({
     fullname:yup.string(),
     email: yup.string()
         .email("Invalid email address")
         .matches(/^([\w]{1,})([@])([\w]{1,})([\.])([\w]{1,})([\.][\w]+)?$/, 'Invalid email format'),
     password : yup.string()
          .min(8, 'Password must be at least 8 characters long')
          .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
       )
       ,
       contact : yup.number(),
  })
  })

  return (
    <>
      <div className="staffPg">
        <div className="container-fluid col-lg-6 col-sm-11 mx-auto mt-5 pt-3 shadow-lg stP">
           <div className="staffPgHeader text-center mt-5 my-4 pt-4 py-3">
               <h1>Sign Up Here</h1>
               
           </div>
         <form action="" onSubmit={staffData.handleSubmit}>
          <div className="inputContainer form-group my-3 pt-2">
            <input
              required="required"
              id="inputField"
              placeholder="Fullname"
              name = "fullname"
              onChange={staffData.handleChange}
              onBlur={staffData.handleBlur}
              type="text"
            />
            <label className="usernameLabel" htmlFor="inputField">
              Fullname
            </label>
            <svg viewBox="0 0 448 512" className="userIcon">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
            </svg>
            {staffData.touched.fullname? <div className="srr text-danger">
            {staffData.errors.fullname}
          </div>:""}
          </div>

          <div className="inputContainer form-group my-5 pt-2">
            <input
              required="required"
              id="inputField"
              placeholder="Email"
              name="email"
              onChange={staffData.handleChange}
              onBlur={staffData.handleBlur}
              type="text"
            />
            <label className="usernameLabel" htmlFor="inputField">
              Email
            </label>
            <svg viewBox="0 0 448 512" className="userIcon">
              <i className="fa-solid fa-envelope"></i>
            </svg>
            {staffData.touched.email? <div className="srr text-danger">
            {staffData.errors.email}
          </div>:""}
          </div>

          <div className="inputContainer form-group my-5 pt-2">
            <input
              required="required"
              id="inputField"
              placeholder="Password"
              name="password"
              onChange={staffData.handleChange}
              onBlur={staffData.handleBlur}
              type="text"
            />
            <label className="usernameLabel" htmlFor="inputField">
              Password
            </label>
            <svg viewBox="0 0 448 512" className="userIcon">
              <i className="fa-solid fa-lock"></i>
            </svg>
            {staffData.touched.password? <div className="text-danger">
            {staffData.errors.password}
          </div>:""}
          </div>

          <div className="inputContainer form-group my-5 pt-2">
            <input
              required="required"
              id="inputField"
              placeholder="Contact No."
              name="contact"
              onChange={staffData.handleChange}
              onBlur={staffData.handleBlur}
              type="text"
            />
            <label className="usernameLabel" htmlFor="inputField">
              Contact No.
            </label>
            <svg viewBox="0 0 448 512" className="userIcon">
              <i className="fa-solid fa-phone"></i>
            </svg>
            {staffData.touched.contact? <div className="srr text-danger">
            {staffData.errors.contact}
          </div>:""}
          </div>

          <center className="form-group myBtn my-5 py-3">
            <button
              className="btn btn-dark btn-outline-secondary text-light signUpBtn"
              type="submit"
            >
              Submit
            </button>
          </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default StaffSignUp;
