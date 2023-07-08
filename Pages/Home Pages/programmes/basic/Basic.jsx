import React from "react";
import Navbar from "../../../../src/components/Navbar";
import "./prog.css";
import { Link } from "react-router-dom";
import Copyright from "../../../../src/components/Copyright";

const Basic = () => {
  return (
    <>
      <Navbar />
      <div className="basicCont">
        <div className="tpPg">
          <div className="headerTxt">
            <h2>
              Basic Degree <br />
              Program
            </h2>
            <p>Now begins real learning.</p>
            <div className="tpPgBtn">
              <button className="aBtn">
                <span>
                  <Link className="" to="/StudentSignUp">
                    Enroll Now
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="cont">
          <div className="contHeader">
            <h2>Earn a Degree + Experience</h2>
          </div>
          <div className="degExpWrapper">
            <div className="degExpTxt">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                labore qui architecto, similique doloribus asperiores sint
                dolorem neque, in quo perspiciatis atque ex culpa nobis corrupti
                esse nostrum animi harum? Adipisci, autem? Obcaecati numquam
                blanditiis omnis inventore fugiat commodi ipsum?
              </p>
              <hr className="line" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                nisi, tempora ut repudiandae quod consequatur. Quae deserunt
                velit amet voluptatem quia! Qui nesciunt ipsam neque laudantium.
                Consectetur omnis quod qui non vel maiores. Quibusdam
                repellendus dignissimos minus iusto sit facere exercitationem
                quas expedita labore ad.
              </p>
            </div>
            <div className="degExpImg">
              <img src="Image/grad.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="cont">
          <div className="contHeader">
            <h2>Our Accredited Programs</h2>
          </div>
          <div className="acredProgTxt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              est, vero ut omnis quod repellendus. Ipsa, placeat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quo
              culpa repellendus odio, hic eius obcaecati! Alias placeat pariatur
              similique voluptatibus quos suscipit fugiat sapiente, non illo,
              voluptatum nobis fuga inventore minus vero doloremque nam.
            </p>
          </div>

          <div className="acredCard">
            <div className="card" style={{ width: "25rem" }}>
              <img
                src="Image/software-deve.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">FRONTEND</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ab commodi nemo accusamus vero, eaque consectetur
                  temporibus. Aspernatur nemo, perspiciatis molestias,
                  voluptatem ratione officia quaerat praesentium, suscipit quae
                  molestiae esse.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "25rem" }}>
              <img src="Image/server.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">BACKEND</h5>
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

        <div className="cont">
          <div className="whyStud">
            <h6>WHY STUDY AT IFZY</h6>
          </div>
          <div className="contHeader">
            <h2>IFZY Merits</h2>
          </div>
          <div className="whyStudTxt">
            <div className="txtCont">
              <div className="tXtHeader">
                <h6>Facilities and Lecturers</h6>
              </div>
              <div className="txtBdy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="txtCont">
              <div className="tXtHeader">
                <h6>Acquire a tech skill</h6>
              </div>
              <div className="txtBdy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="txtCont">
              <div className="tXtHeader">
                <h6>Job Opportunity</h6>
              </div>
              <div className="txtBdy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="txtCont">
              <div className="tXtHeader">
                <h6>Conducive learning space</h6>
              </div>
              <div className="txtBdy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="txtCont">
              <div className="tXtHeader">
                <h6>Learn the smarter and faster way</h6>
              </div>
              <div className="txtBdy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing. Dolor amet sit init amet.</p>
              </div>
            </div>
            <div className="txtCont">
              <div className="tXtHeader">
                <h6>Purely practical</h6>
              </div>
              <div className="txtBdy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="applic">
        <div className="applicCont">
            <div className="applicBgTxt">
               <h2>Begin your application process</h2>
            </div>
            <div className="applicBtn">
             <button className="aBtn me-lg-5 ms-sm-4 my-sm-3">
             <span>
             <Link className="" to="/StudentSignUp">
             Start Application
           </Link>
           </span>
             </button>
             <button className="aBtn ms-lg-2">
             <span>
             <Link className="" to="">
             Admission Requirements
           </Link>
           </span>
             </button>
            </div>
        </div>
        </div>
      </div>


      <Copyright/>
    </>
  );
};

export default Basic;
