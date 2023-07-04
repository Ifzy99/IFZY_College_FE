import React from "react";
import Navbar from "../../src/components/Navbar";
import "./student.css";
import { Link } from "react-router-dom";

const StudentSignIn = () => {
  return (
    <>
      <div className="sPage">
        <div className="text-center display-6 fw-normal my-3">Welcome back</div>
        <div
          className="containerfluid col-lg-6 col-sm-11 shadow p-3 mx-auto"
          style={{ borderRadius: "4%" }}
        >
          <center className="sPageLogo pt-4 py-3 mt-3 my-3">
            <img src="Image/myLogo.png" alt="" className="sPageImg"/>
          </center>

          <div
            className="inputbox form-group my-3"
            style={{ width: "80%", margin: "0 auto" }}
          >
            <input required="required" type="text" />
            <span>Email</span>
            <i></i>
          </div>

          <div
            className="inputbox form-group my-3"
            style={{ width: "80%", margin: "0 auto" }}
          >
            <input required="required" type="text" />
            <span>Password</span>
            <i></i>
          </div>

          <center className="form-group myBtn my-5">
            <button
              className="btn btn-dark btn-outline-secondary text-light signUpBtn"
              type="submit"
            >
              LOG IN
            </button>
          </center>

          <div className="sPgFooter">
            <div className="alt">
              <hr />
              <p>Or</p>
              <hr />
            </div>
            <center>
              <button className="btn btn-light goog">
                <div className="googCont">
                  <img className="Gg" src="Image/Ggg.png" alt="" />
                  <h5 className="mx-auto mt-3 fw-bold text-align-start">
                    LOG IN WITH GOOGLE
                  </h5>
                </div>
              </button>
              <button className="btn btn-light goog mt-2">
                <div className="googCont">
                  <img className="Gg" src="Image/Ghb.png" alt="" />
                  <h5 className="mx-auto mt-4 fw-bold text-align-start">
                    LOG IN WITH GITHUB
                  </h5>
                </div>
              </button>
            </center>

            <div className="fgt mt-3">
              <p>
                <Link to="">Forgot your password?</Link>
              </p>
            </div>

            <div className="lgIn">
              <p>
                New to IFZY?{" "}
                <span>
                  <Link  to="/StudentSignUp">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSignIn;
