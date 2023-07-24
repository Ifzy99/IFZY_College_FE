import React from 'react'
import { Link } from 'react-router-dom'
import "./master.css"
import Navbar from '../../../../src/components/landing Pg/Navbar'
import Copyright from '../../../../src/components/landing Pg/Copyright'



const Masters = () => {
   
  return (
    <>
    <Navbar/>
    <div className="mastCont">
    <div className="tpPg">
    <div className="headerTxt">
      <h2>
        Masters <br /> Degree <br />
        Program
      </h2>
      <p>
      Acquire a Masters certification in ICT at your convenience..
      </p>
      <div className="tpPgBtn">
        <button className="aBtn">
          <span>
            <Link className="" to="/StudentSignUp">
              Enroll Now!
            </Link>
          </span>
        </button>
      </div>
    </div>
  </div>


     <div className="conT">
     <div className="info1 mt-5">
          <div className="row">
                  <div className="info1Img col-lg-6 col-sm-11">
                      <img src="Image/code1.jpg" alt="" />
                  </div>
                  <div className="info1Txt col-lg-5 col-sm-11">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias nihil et alias aspernatur voluptatem deserunt reprehenderit corporis illo ipsam esse velit tempora illum expedita magnam aut incidunt, dolorem nostrum in aliquid. Itaque quas dicta asperiores quis odit. Corrupti recusandae sapiente aspernatur veniam cumque hic eum magni eos, dolore fugiat, labore totam! Praesentium, quibusdam eos?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore assumenda dolor deserunt minima quos fuga repudiandae expedita asperiores sequi praesentium officiis, eligendi perferendis sapiente officia nobis vero ad quam voluptates, minus itaque quaerat distinctio placeat? Nobis esse facilis odit iste fuga nam voluptatum amet quisquam! Voluptatum beatae voluptatem temporibus unde modi officia sunt, ratione tempore facere, eveniet error odio ducimus asperiores ipsa accusamus exercitationem esse ab totam. Deserunt, aliquid.</p>
                  </div>
                  <div className="info1Txt mt-lg-5 col-lg-6 col-sm-11">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas dicta asperiores quis odit. Corrupti recusandae sapiente aspernatur veniam cumque hic eum magni eos, dolore fugiat, labore totam! Praesentium, quibusdam eos?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore assumenda dolor deserunt minima quos fuga repudiandae expedita asperiores sequi praesentium officiis, eligendi perferendis sapiente.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nobis. Adipisci praesentium saepe aliquam voluptatum!</p>
                  </div>
                  <div className="info2Img col-lg-5 col-sm-11">
                      <img src="Image/codeWork.jpg" alt="" />
                  </div>
              </div>
          </div>
     </div>

       <div className="act">
            <div className="actWrapper">
            <h2 className="">Ready to take your career to the next level?</h2>
            <button className="aBtn ms-lg-5 bg bg-warning ">
            <span>
              <Link to="/StudentSignUp">
                   Enroll Now
              </Link>
            </span>
            </button>
            </div>
       </div>

    </div>
    <Copyright/>
    
    </>
  )
}

export default Masters