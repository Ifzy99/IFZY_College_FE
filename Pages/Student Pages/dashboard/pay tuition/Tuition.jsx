import React from 'react'
import "../style.css"
import OffCanvas from '../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas'
import DashNav from '../../../../src/components/student Dashboard/dashboardNav/DashNav'
import Accordion from '../../../../src/components/landing Pg/Accordion'
import PayAccordion from '../../../../src/components/student Dashboard/payAccordion/PayAccordion'

const Payment = () => {
  return (
    <>
    <div className="mainCont">
       <div className="OFF">
          <OffCanvas/>
       </div>

       <div className="BOD">
          <DashNav/>

          <div className="paybdy">
          <div className="docHeader p-lg-5 p-4">
               TUITION PAYMENTS
          </div>
            <div className="semester">
              <PayAccordion semester={"SECOND SEMESTER"} semester1={"FIRST SEMESTER"}/>
              
              
            </div>  
          
             
          </div>
       </div>
    </div>
    </>
  )
}

export default Payment