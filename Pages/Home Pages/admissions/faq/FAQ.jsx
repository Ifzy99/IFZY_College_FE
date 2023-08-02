import React from 'react'
import "../addmission.css"
import Navbar from '../../../../src/components/landing Pg/Navbar'
import Accordion from '../../../../src/components/landing Pg/Accordion'
import Copyright from '../../../../src/components/landing Pg/Copyright'

const FAQ = () => {
  return (
    <>
      <Navbar/>
      <div className="faqCont">
      <div className="topSect">
      <h2>FREQUENTLY ASKED <br/>
        QUESTIONS</h2>
      <p>What You ought to know</p>
      </div>

        <div className="faqbdy">
          <Accordion 
          question={"What is the difference between the professional Certificate Programme and National Inovation Diploma "}
          question1={"Which course is the best for me?"}
          question2={"What if I don’t have time to come to class?"}
          />
        </div>
        
      
      </div>
      <Copyright/>
    
    </>
  )
}

export default FAQ