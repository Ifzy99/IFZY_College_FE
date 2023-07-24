import React from "react";
import Navbar from "../../../../src/components/landing Pg/Navbar";
import "./prof.css";
import { Link } from "react-router-dom";
import Copyright from "../../../../src/components/landing Pg/Copyright";



const Professional = () => {
 
  return (
    <>
      <Navbar />
      <div className="profCont">
        <div className="tpPg">
          <div className="headerTxt">
            <h2>
              Professional <br /> Degree <br />
              Program
            </h2>
            <p>
              Take your Career to the next level with dynamic professional
              courses from IFZY.
            </p>
            <div className="tpPgBtn">
              <button className="aBtn">
                <span>
                  <Link className="" to="/StudentSignUp">
                    Enroll Now!
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="conT">
          <div className="row">
            <div className="msGImg col-lg-3 col-sm-10 mx-auto gap-20">
              <img src="Image/myLogo.png" alt="" />
            </div>
            <div className="msGTxt col-lg-8 col-sm-10 mx-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                deleniti eum maxime rerum praesentium alias quidem aperiam
                itaque suscipit quod! Voluptates, illo, minus reprehenderit,
                exercitationem ut nulla sapiente labore possimus doloribus nihil
                in magnam nam! Nam, possimus!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                alias? Nulla doloribus voluptates ad? Mollitia, unde nisi
                dolore, praesentium rerum eveniet quae laborum adipisci,
                eligendi atque sint officiis expedita velit dolor ducimus amet
                odio! Necessitatibus rem distinctio eaque expedita nihil aliquam
                excepturi?
              </p>
            </div>
          </div>
        </div>

        <div className="courses">
          <div className="coursesTxt text-center pt-3 py-3 text-light">
            <h2>Courses</h2>
          </div>
        </div>

        <div className="cont">
          <div className="row">
            <div className="card col-lg-4 col-sm-10 me-4 my-3 mx-auto ">
              <img
                src="Image/software-deve.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">HTML & CSS</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ab commodi nemo accusamus vero, eaque consectetur
                  temporibus. Aspernatur nemo, perspiciatis molestias,
                  voluptatem ratione officia quaerat praesentium, suscipit quae
                  molestiae esse.
                </p>
              </div>
            </div>
            <div className="card col-lg-4 col-sm-10 me-4 my-3 mx-auto ">
              <img
                src="Image/software-deve.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">JAVASCRIPT</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ab commodi nemo accusamus vero, eaque consectetur
                  temporibus. Aspernatur nemo, perspiciatis molestias,
                  voluptatem ratione officia quaerat praesentium, suscipit quae
                  molestiae esse.
                </p>
              </div>
            </div>
            <div className="card col-lg-4 col-sm-10 me-4 my-3 mx-auto">
              <img
                src="Image/software-deve.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">MERN STACK</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ab commodi nemo accusamus vero, eaque consectetur
                  temporibus. Aspernatur nemo, perspiciatis molestias,
                  voluptatem ratione officia quaerat praesentium, suscipit quae
                  molestiae esse.
                </p>
              </div>
            </div>
            <div className="card col-lg-4 col-sm-10 me-4 my-3 mx-auto">
              <img
                src="Image/software-deve.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">ANGULAR</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ab commodi nemo accusamus vero, eaque consectetur
                  temporibus. Aspernatur nemo, perspiciatis molestias,
                  voluptatem ratione officia quaerat praesentium, suscipit quae
                  molestiae esse.
                </p>
              </div>
            </div>
            <div className="card col-lg-4 col-sm-10 me-4 my-3 mx-auto">
              <img
                src="Image/software-deve.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">PHP</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ab commodi nemo accusamus vero, eaque consectetur
                  temporibus. Aspernatur nemo, perspiciatis molestias,
                  voluptatem ratione officia quaerat praesentium, suscipit quae
                  molestiae esse.
                </p>
              </div>
            </div>
            <div className="card col-lg-4 col-sm-10 me-4 my-3 mx-auto">
              <img
                src="Image/software-deve.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">SQL</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ab commodi nemo accusamus vero, eaque consectetur
                  temporibus. Aspernatur nemo, perspiciatis molestias,
                  voluptatem ratione officia quaerat praesentium, suscipit quae
                  molestiae esse.
                </p>
              </div>
            </div>
          </div>
        </div> 

      </div>
      <Copyright/>
    </>
  );
};

export default Professional;
