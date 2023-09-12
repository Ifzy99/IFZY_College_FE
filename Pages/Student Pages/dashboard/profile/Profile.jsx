import React from "react";
import "../style.css";
import OffCanvas from "../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas";
import DashNav from "../../../../src/components/student Dashboard/dashboardNav/DashNav";
import { BsImageFill,BsFillPencilFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { studentInfo } from "../../../../src/redux/counterSlice";
import axios from "axios";


const Profile = () => {
  let studentData = useSelector((state)=>state.counterReducer.studentData)

  return (
    <>
      <div className="mainCont">
        <div className="OFF">
          <OffCanvas />
        </div>

        <div className="BOD">
          <DashNav />
          <div className="profileBdy">
            <div className="pHeader">
              <div className="row">
                <div className="pHeaderTxt col-6">PROFILE</div>
                <div className="pHeaderImg col-6">
                  <h3>
                    <BsImageFill />
                  </h3>
                </div>
              </div>
            </div>

            <div className="sn d-flex gap-2">
              <h6 className="num">1</h6>
              <h5 className="txt mt-2">Personal</h5>
            </div>

            <div className="proList mt-3">
            <div className="row">
            <div className="profTitle col-lg-6 col-sm-12">
                  <p>Firstname</p>
                  <div>{studentData.firstname}</div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Lastname</p>
                  <div>{studentData.lastname}</div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Middle Name</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Date of birth</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Nationality</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>State of Origin</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Gender</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Marital Status</p>
                  <div></div>
                  <hr />
                </div>
              </div>

              <div className="sn d-flex gap-2 mt-4">
                <h6 className="num">2</h6>
                <h5 className="txt mt-2">Contact</h5>
              </div>
              <div className="row mt-3">
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Phone 1</p>
                  <div>{studentData.phone}</div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Phone 2</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Email</p>
                  <div>{studentData.email}</div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Address</p>
                  <div></div>
                  <hr />
                </div>
              </div>

              <div className="sn d-flex gap-2 mt-4">
                <h6 className="num">3</h6>
                <h5 className="txt mt-2">Refree</h5>
              </div>
              <div className="row mt-3">
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Fullname</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Phone</p>
                  <div></div>
                  <hr />
                </div>
                <div className="profTitle col-lg-6 col-sm-12">
                  <p>Email</p>
                  <div></div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
              
             
             <Link className="editLink" to="/profile/editPg">
             <div className="goToEditPg">
                 <h3><BsFillPencilFill/></h3>
             </div>
             </Link>
             
               
          
        </div>
      </div>
    </>
  );
};

export default Profile;
