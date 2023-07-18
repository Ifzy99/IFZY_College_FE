import React from 'react'
import "../style.css"
import OffCanvas from '../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas'
import DashNav from '../../../../src/components/student Dashboard/dashboardNav/DashNav'

const Documents = () => {
  return (
    <>
    <div className="mainCont">
       <div className="OFF">
         <OffCanvas/>
       </div>

       <div className="BOD">
          <DashNav/>
          <div className="docBdy p-4">
             <div className="docHeader">
                 DOCUMENTS
             </div>
             <p>You have not uploaded any documents here</p>
          </div>
       </div>
    </div>
    
    </>
  )
}

export default Documents