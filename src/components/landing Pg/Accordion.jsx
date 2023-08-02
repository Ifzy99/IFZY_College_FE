import React from "react";

const Accordion = ({question,question1,question2}) => {
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
              {question}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo dolore nostrum quasi aperiam pariatur sint numquam ipsam dolorem earum, expedita fuga, similique possimus architecto eos, exercitationem non maxime ratione voluptates aspernatur nulla provident accusamus facere. Consequatur fugit iste veniam, deserunt saepe ut consequuntur ea culpa architecto?
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
             {question1}
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fugiat, eos aliquam itaque ex sed optio repudiandae explicabo, enim quos beatae eaque officia porro aut sit dolor odit. Quia quaerat blanditiis sit. Tempore deleniti quam consequatur, iusto earum vel, veritatis velit vero possimus non hic quaerat, molestias voluptas saepe distinctio.
            </div>
          </div>
        </div>
        <div className="accordion-item my-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              {question2}
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum eum dolor voluptatem nam odit? Explicabo, accusantium dolor optio natus quod provident iusto dolore repellat consectetur at cupiditate itaque fuga ad ipsum laboriosam voluptatibus laborum, laudantium assumenda officia.
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Accordion;
