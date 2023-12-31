import React from 'react'
import "../addmission.css"
import Navbar from '../../../../src/components/landing Pg/Navbar'
import Accordion from '../../../../src/components/landing Pg/Accordion'
import { Link } from 'react-router-dom'
import Copyright from '../../../../src/components/landing Pg/Copyright'


const Tuition = () => {
  return (
    <>
     <Navbar/>
     <div className="tuitCont">
        <div className="topSect">
        <h2>REGISTRATION <br/>
         & TUITION ANALYSIS</h2> 
        </div>

        <div className="tuitBdy">
            <div className="bDeg">
             <h3>Basic Degree Program</h3>
             <div className="bDegCont">
                <img src="Image/graduation-cap.jpg" alt="" style={{width:"400px"}} />
                <div className="accrd w-100 ps-5">
                  <Accordion question={"Application Fee"} question1={"Acceptance Fee"} bdy={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo dolore nostrum quasi aperiam pariatur sint numquam ipsam dolorem earum, expedita fuga, similique possimus architecto eos, exercitationem non maxime ratione voluptates aspernatur nulla provident accusamus facere. Consequatur fugit iste veniam, deserunt saepe ut consequuntur ea culpa architecto?"}/>
                  <Link to="/StudentSignUp">
                     <button className="acaInfoBtn">
                        <span>Start Basic Degree Application</span>
                     </button>
                  </Link>
                </div>
                
             </div>
            </div>

            <div className="pDeg">
               <h3 className="pt-4">Professional Degree Program</h3>
               <div className="bDegCont" style={{width:"80%", margin:"10px auto"}}>
               <img src="Image/code1.jpg" alt="" style={{width:"400px"}} />
               <div className="accrd w-100 ps-5">
                 <Accordion question={"Application Fee"} question1={"Acceptance Fee"} bdy={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo dolore nostrum quasi aperiam pariatur sint numquam ipsam dolorem earum, expedita fuga, similique possimus architecto eos, exercitationem non maxime ratione voluptates aspernatur nulla provident accusamus facere. Consequatur fugit iste veniam, deserunt saepe ut consequuntur ea culpa architecto?"}/>
                 <div className="pBtnCont" style={{textAlign:"start"}}>
                 <Link to="/StudentSignUp">
                    <button className="acaInfoBtn">
                       <span>Start Professional Degree Application</span>
                    </button>
                 </Link>
                 </div>
               </div>
            </div>
            </div>

            <div className="bDeg">
             <h3>Masters Degree Program</h3>
             <div className="bDegCont">
                <img src="Image/codeWork.jpg" alt="" style={{width:"400px"}} />
                <div className="accrd w-100 ps-5">
                  <Accordion question={"Application Fee"} question1={"Acceptance Fee"} bdy={" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fugiat, eos aliquam itaque ex sed optio repudiandae explicabo, enim quos beatae eaque officia porro aut sit dolor odit. Quia quaerat blanditiis sit. Tempore deleniti quam consequatur, iusto earum vel, veritatis velit vero possimus non hic quaerat, molestias voluptas saepe distinctio."}/>
                  <Link to="/StudentSignUp">
                     <button className="acaInfoBtn">
                        <span>Start Masters Degree Application</span>
                     </button>
                  </Link>
                </div>
                
             </div>
            </div>

            <div className="notes">Please note that the college operates a non-refund policy. Therefore, all monies paid to the college with the intention of partaking in any of her programs are non-refundable.</div>
        </div>
     </div>

     <Copyright/>
    
    </>
  )
}

export default Tuition