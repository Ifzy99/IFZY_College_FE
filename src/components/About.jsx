import React from "react";

const About = () => {
  return (
    <>
      <div className="AboutCont">
        <div className="AboutWrapper">
          <div className="AboutBox shadow-lg">
            <div className="AboutIcons">
              <i className="fa-solid fa-calendar fa-2x text-danger"></i>
            </div>
            <h3>2020</h3>
            <div>Year Founded</div>
          </div>
          <div className="AboutBox shadow-lg">
            <div className="AboutIcons">
              <i className="fa-solid fa-user fa-2x text-success"></i>
            </div>
            <h3>500</h3>
            <div>Students in 2023</div>
          </div>
          <div className="AboutBox shadow-lg">
            <div className="AboutIcons">
              <i className="fas fa-users fa-2x text-warning"></i>
            </div>
            <h3>100</h3>
            <div>Staffing</div>
          </div>
          <div className="AboutBox shadow-lg">
            <div className="AboutIcons">
              <i className="fas fa-user-graduate fa-2x text-info"></i>
            </div>
            <h3>900</h3>
            <div>Alumni</div>
          </div>
          <div className="AboutBox shadow-lg">
            <div className="AboutIcons">
              <i className="fa-solid fa-handshake fa-2x text-secondary"></i>
            </div>
            <h3>50</h3>
            <div>Patner</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
