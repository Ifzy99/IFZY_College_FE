import React from 'react'
import "../style.css"
import OffCanvas from '../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas'
import DashNav from '../../../../src/components/student Dashboard/dashboardNav/DashNav'

const CourseReg = () => {
  return (
    <>
    <div className="mainCont">
    <div className="OFF">
    <OffCanvas/>
    </div>

    <div className="BOD">
      <DashNav/>
         
      <div className="cRegBdy">
          <h6>COURSE REGISTRATION</h6>

          <div className="courses ">
            <table className="table table-bordered table-striped text-light">
               <tr>
                <td>Course Title</td>
                <td>Description</td>
                <td>Units</td>
                <td>Action</td>
               </tr>
            </table>
          </div>
      </div>
    </div>

    </div>
    
    
    </>
  )
}

export default CourseReg