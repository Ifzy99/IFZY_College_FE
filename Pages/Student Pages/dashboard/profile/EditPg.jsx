import React from "react";
import "../style.css";
import OffCanvas from "../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas";
import DashNav from "../../../../src/components/student Dashboard/dashboardNav/DashNav";
import { BsImageFill } from "react-icons/bs";
import {RiSave3Fill } from "react-icons/ri";

RiSave3Fill

const EditPg = () => {
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

            
            <form action="">
            <div className="sn d-flex gap-2">
              <h6 className="num">1</h6>
              <h5 className="txt mt-2">Personal</h5>
            </div>
              <div className="row">
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Firstname</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Lastname</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Middle Name</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Date of birth</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Nationality</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">State of Origin</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Gender</label>
                  <select name="" id="" className="pflSelect">
                    <option value=""></option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Marital Status</label>
                  <select name="" id="" className="pflSelect">
                    <option value=""></option>
                    <option value="">Single</option>
                    <option value="">Married</option>
                  </select>
                </div>
              </div>

              <div className="sn d-flex gap-2 mt-4">
                <h6 className="num">2</h6>
                <h5 className="txt mt-2">Contact</h5>
              </div>
              <div className="row">
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Phone 1</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Phone 2</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Email</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Address</label>
                  <input type="text" className="form-control editInp" />
                </div>
              </div>

              <div className="sn d-flex gap-2 mt-4">
                <h6 className="num">3</h6>
                <h5 className="txt mt-2">Refree</h5>
              </div>
              <div className="row">
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Fullname</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Phone</label>
                  <input type="text" className="form-control editInp" />
                </div>
                <div className="form-group editCont my-3 col-lg-6 col-sm-12">
                  <label htmlFor="inputField">Email</label>
                  <input type="text" className="form-control editInp" />
                </div>
              </div>

              <div className="form-group my-3">
                <button className="changeBtn" type="submit" >
                  <h3><RiSave3Fill/></h3>
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPg;
