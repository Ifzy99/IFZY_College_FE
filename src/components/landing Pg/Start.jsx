import React from "react";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <>
      <div className="stPg">
        <div className="row">
          <div className="col-lg-6 col-sm-12 stPgCont">
            <div className="stPgHeader">
              <h1>Study to become a global talent in tech</h1>
            </div>
            <div className="stPgBody">
              <p>
                Learn new tech skill using world-class curriculum and top
                experts.
              </p>
            </div>
            <button className="btn eBtn">
              <Link className="text-light" to="/StudentSignUp">Enroll Now</Link>
            </button>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="stPgImage mx-auto mt-2">
              <img src="Image/boyLapt.png" alt="" className="boyImg text-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
