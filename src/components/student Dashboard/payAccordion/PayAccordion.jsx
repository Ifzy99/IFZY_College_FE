import React from "react";
import "./payA.css";

function PayAccordion({ semester, semester1 }) {
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item my-3">
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
              <hr />
              <div className="acBdyTxt">
                <p>Amount Paid:</p>
                <p>-0</p>
              </div>

              <div className="acBdyFooter">
                <button className="payBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Pay into Wallet</button>
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
              <div className="acBdyHeader">
                <h6>FEE</h6>
                <h6>AMOUNT</h6>
              </div>
              <div className="acBdyTxt pt-2">
                <p>Total:</p>
                <p>0</p>
              </div>
              <hr />
              <div className="acBdyTxt">
                <p>Amount Paid:</p>
                <p>-0</p>
              </div>

              <div className="acBdyFooter">
                <button className="payBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Pay into Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      



<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
    
    </>
  );
}

export default PayAccordion;
