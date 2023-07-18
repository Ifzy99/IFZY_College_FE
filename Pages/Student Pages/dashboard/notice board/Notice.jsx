import React from 'react'
import "../style.css"
import OffCanvas from '../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas'
import DashNav from '../../../../src/components/student Dashboard/dashboardNav/DashNav'

const Notice = () => {
  return (
    <>
      <div className="mainCont">
          <div className="OFF">
            <OffCanvas/>
          </div>

          <div className="BOD">
             <DashNav/>

             <div className="notcBdy">
                 <p>Notice board is empty</p>
             </div>
          </div>
      </div>
    </>
  )
}

export default Notice