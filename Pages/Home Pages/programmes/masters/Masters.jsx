import React from 'react'
import { Link } from 'react-router-dom'
import "./master.css"
import Navbar from '../../../../src/components/Navbar'
import { useSelector } from 'react-redux'


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
          <div className="row">
              <div className="info1">
                  <div className="info1Img col-lg-6 col-sm-11">
                      <img src="Image/code1.jpg" alt="" />
                  </div>
                  <div className="info1Txt">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitia. Nulla aliquid eum porro molestias voluptatibus.</p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, officiis eaque?</p>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero fugit dolorem consequuntur quaerat.</p>
                  </div>
              </div>
              <div className="info2 col-lg-7 col-sm-11">
                  <div className="infoImg2">
                    <img src="Image/code1.jpg" alt="" />
                  </div>
                  <div className="info2Txt">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias nihil et alias aspernatur voluptatem deserunt reprehenderit corporis illo ipsam esse velit tempora illum expedita magnam aut incidunt, dolorem nostrum in aliquid. Itaque quas dicta asperiores quis odit. Corrupti recusandae sapiente aspernatur veniam cumque hic eum magni eos, dolore fugiat, labore totam! Praesentium, quibusdam eos?</p>
                  </div>
              </div>
          </div>
     </div>
    </div>
    
    </>
  )
}

export default Masters