import React from 'react'
import "../style.css"
import OffCanvas from '../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas'
import DashNav from '../../../../src/components/student Dashboard/dashboardNav/DashNav'
import { BsImageFill } from "react-icons/bs";


const EditPg = () => {
  return (
    <>
       <div className="mainCont">
           <div className="OFF">
               <OffCanvas/>
           </div>

           <div className="BOD">
              <DashNav/>

              <div className="profileBdy">
                 <div className="pHeader">
                    <div className="row">
                      <div className="pHeaderTxt col-6">PROFILE</div>
                       <div className="pHeaderImg col-6">
                         <h3><BsImageFill/></h3>
                       </div>
                    </div>
                 </div>

                 <div className="sn d-flex gap-2">
                    <h6 className="num">1</h6>
                    <h5 className="txt mt-2">Personal</h5>
                </div>

                <div className="row">
                   <form action="">
                   
                   </form>
                </div>
              </div>

           </div>

       </div>
    </>
  )
}

export default EditPg