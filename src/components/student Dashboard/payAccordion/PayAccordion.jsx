import React from 'react'
import "./payA.css"

function PayAccordion({semester,semester1}) {
  return (
    <>
    
    <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item my-3" >
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          {semester}
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <div className="acBdyHeader">
             <h6>FEE</h6>
             <h6>AMOUNT</h6>
          </div>
          <div className="acBdyTxt pt-2">
            <p>Total:</p>
            <p>0</p>
          </div>
          <hr/>
          <div className="acBdyTxt">
            <p>Amount Paid:</p>
            <p>-0</p>
          </div>

             <div className="acBdyFooter">
             
             </div>
        </div>
      </div>
    </div>

    <div className="accordion-item my-3">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
         {semester1}
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
         
        </div>
      </div>
    </div>
   
  </div>
    </>
  )
}

export default PayAccordion