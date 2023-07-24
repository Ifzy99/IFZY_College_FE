import React from "react";
import Navbar from "../../../src/components/landing Pg/Navbar";
import Copyright from "../../../src/components/landing Pg/Copyright";

const Mission = () => {
  return (
    <>
      <Navbar />
      <div className="missCont">
        <div className="tpPg">
          <div className="missMsg">
            <h2 className="missMsgText">OUR MISSION</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="msgCont">
          <div className="visMsgHeader">
            <h2 className="wAi">Our Vision</h2>
          </div>
          <div className="visMsgTxt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint.
            </p>
          </div>
        </div>
        <div className="msgCont">
          <div className="tgtMsgHeader">
            <h2 className="wAi">Our Target Group</h2>
          </div>
          <div className="tgtTxt">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit
              perferendis voluptates vel:
            </p>
            <ol type="i">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, quibusdam fuga.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, quibusdam fuga.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, quibusdam fuga.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, quibusdam fuga.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, quibusdam fuga.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, quibusdam fuga.
              </li>
            </ol>
          </div>
        </div>
        <div className="msgCont">
          <h5 className="wAi">Our Objective</h5>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam
            mollitia eaque harum sequi molestiae voluptatem accusamus sunt at
            aspernatur.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ol>
        </div>
        <div className="msgCont">
             <div className="stateMHeader">
               <h5 className="wAi">Non-discrimination Statement</h5>
             </div>
             <div className="stateMTxt">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequuntur autem rem a cupiditate nihil recusandae tempore. In, dolorem error cumque quos corporis ut eius enim, eos, a maiores soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus nulla laborum repellendus illo? Autem dolore temporibus odit quaerat distinctio quos ut init enim divano nulla dorime ameno dorime re o</p>
             </div>
        </div>
      </div>
      <Copyright/>
    </>
  );
};

export default Mission;
