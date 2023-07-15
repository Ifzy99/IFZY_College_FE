import React from "react";
import "./cp.css";
import OffCanvas from "../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas";
import DashNav from "../../../../src/components/student Dashboard/dashboardNav/DashNav";

const ChangePass = () => {
  return (
    <>
      <div className="container-fluid changePassCont">
        <div className="OFF">
          <OffCanvas />
        </div>

        <div className="BOD">
          <DashNav />
          <div className="changePassBdy shadow-lg">
            <div className="cont ">
              <h6>CHANGE PASSWORD</h6>
              <form action="">
                <div className="form-group my-3">
                  <label htmlFor="inputField">Old Password</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="inputField">New Password</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="inputField">Confirm New Password</label>
                  <input type="text" className="form-control" />
                </div>
                 <div className="form-group my-3 py-4">
                <button className="changeBtn">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
