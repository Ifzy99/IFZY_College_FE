import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import axios from "axios";
import "./student.css";
import Footer from "../../src/components/Footer";
import * as yup from "yup";

const StudentSignUp = () => {
  const navigate = useNavigate();
  let studentData = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);

      const endpoint = "http://localhost:5000/student/SignUp";
      axios.post(endpoint, values).then((response) => {
          if (response.data == "save") {
            navigate("/StudentSignIn");
          }
      });
    },
    validationSchema: yup.object({
      firstname: yup.string().required("firstname is required")
                    //  .length(10, "Must be 10 characters")
                     ,
      lastname: yup.string()
                   .required("lastname is required"),
      email: yup.string()
                .required("email is required")
                .email("This is not a valid email")
                .matches(/^([\w]{1,})([@])([\w]{1,})([\.])([\w]{1,})([\.][\w]+)?$/, 'Invalid email format'),
      password: yup.string()
                   .required("password is required")
                   .min(8, 'Password must be at least 8 characters long')
                   .matches(
                         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                       'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        )
        ,
      phone: yup.string() 
                .required("Phone No. is required")
                .min(9, "Phone number must be at least 9 characters long")
                .max(11, "Phone number must not exceed 11 characters")
                .matches(/^\d{3}-\d{3}-\d{5}$/, 'Phone number must not exceed 11 characters long')
      ,
     
    }),
    // validate : (values)=>{
    //   let errors = {}
    // let regexForPhoneNumber = /^[\d]{11}$/
    
    //   if(values.firstname==""){
    //       errors.firstname ="Firstname cannot be blank"
    //   }if(values.lastname==""){
    //       errors.lastname ="Lastname cannot be blank"
    //   }if(values.email==""){
    //      errors.email = "Email cannot be blank"
    //   }if(values.password==""){
    //     errors.password = "Password cannot be blank"
    //  }if(values.cPassword==""){
    //     errors.cPassword = "Password cannot be blank"
    //  }if(values.phone==""){
    //     errors.phone = "Phone cannot be blank"
    //  }
    // //  console.log(errors)
    //   return errors;
    // },
  });

  return (
    <>
      <div className="sPage">
        <div className="text-center display-6 fw-normal my-3">
          Create your account
        </div>
        <div
          className="containerfluid col-lg-6 col-sm-11 shadow p-3 mx-auto"
          style={{ borderRadius: "4%" }}
        >
          <center className="sPageLogo pt-4 py-3 mt-3 my-3">
            <img src="Image/myLogo.png" alt="" className="sPageImg" />
          </center>

          <form action="" onSubmit={studentData.handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="inputbox form-group my-3">
                  <input
                    required="required"
                    type="text"
                    name="firstname"
                    onChange={studentData.handleChange}
                    onBlur={studentData.handleBlur}
                  />
                  <span>Firstname</span>
                  <i></i>
                </div>
                {studentData.touched.firstname? <div className="err text-danger">
                {studentData.errors.firstname}
              </div>:""}
              </div>

              <div className="col-lg-6 col-12">
                <div className="inputbox form-group my-3">
                  <input
                    required="required"
                    type="text"
                    name="lastname"
                    onChange={studentData.handleChange}
                    onBlur={studentData.handleBlur}
                  />
                  <span>Lastname</span>
                  <i></i>
                </div>
              </div>
              {studentData.touched.lastname? <div className="err text-danger">
              {studentData.errors.lastname}
            </div>:""}
            </div>

            <div className="inputbox form-group my-3">
              <input
                required="required"
                type="text"
                name="email"
                onChange={studentData.handleChange}
                onBlur={studentData.handleBlur}
              />
              <span>Email</span>
              <i></i>
            </div>
            {studentData.touched.email? <div className="err text-danger">
            {studentData.errors.email}
          </div>: null}

           
              
                <div className="inputbox form-group my-3">
                  <input
                    required="required"
                    type="text"
                    name="password"
                    onChange={studentData.handleChange}
                    onBlur={studentData.handleBlur}
                    value={studentData.values.password}
                  />
                  <span>Password</span>
                  <i></i>
                </div>
                {studentData.touched.password? <div className="err text-danger">
                {studentData.errors.password}
              </div>:""}
        

            

            <div className="inputbox form-group my-3">
              <input
                required="required"
                type="text"
                name="phone"
                onChange={studentData.handleChange}
                onBlur={studentData.handleBlur}
                
              />
              <span>Phone</span>
              <i></i>
            </div>
            {studentData.touched.phone? <div className="err text-danger">
            {studentData.errors.phone}
          </div>: ""}

            <center className="form-group myBtn my-5">
              <button 
                className="btn btn-dark btn-outline-secondary text-light signUpBtn"
                type="submit"
              >
                Submit
              </button>
            </center>
          </form>

          <div className="sPgFooter">
            <div className="alt">
              <hr className="ln" />
              <p>Or</p>
              <hr className="ln" />
            </div>
            <center>
              <button className="btn btn-light goog">
                <div className="googCont">
                  <img className="Gg" src="Image/Ggg.png" alt="" />
                  <h5 className="mx-auto mt-3 fw-bold text-align-start">
                    SIGN UP WITH GOOGLE
                  </h5>
                </div>
              </button>
              <button className="btn btn-light goog mt-2">
                <div className="googCont">
                  <img className="Gg" src="Image/Ghb.png" alt="" />
                  <h5 className="mx-auto mt-4 fw-bold text-align-start">
                    SIGN UP WITH GITHUB
                  </h5>
                </div>
              </button>
            </center>

            <div className="footNt">
              <p>
                By signing up, you indicate that you have read, understood and
                agree to IFZY's{" "}
                <span>
                  <Link to="">Terms of Service</Link>
                </span>{" "}
                and{" "}
                <span>
                  <Link to="">Privacy Policy</Link>
                </span>{" "}
              </p>
            </div>

            <div className="lgIn">
              <p>
                Already on IFZY?{" "}
                <span>
                  <Link to="/StudentSignIn">Log in</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSignUp;
