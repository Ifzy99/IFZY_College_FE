import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../dashB/dash.css";
import {IoIosNotifications } from 'react-icons/io';
import {FaUserAlt,FaEnvelope,FaUserTie}  from'react-icons/fa';
import { MdEmail, MdNotificationImportant,MdOutlineAutoGraph } from 'react-icons/md';
import { RiGraduationCapFill } from 'react-icons/ri';
import { BiSolidSchool } from 'react-icons/bi';
import DashNav from "../../../../src/components/student Dashboard/dashboardNav/DashNav";
import OffCanvas from "../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas";
import { studentInfo } from "../../../../src/redux/counterSlice";










const Dashboard = ({}) => {
  let navigate = useNavigate
  const dispatch=useDispatch()
  let studentData = useSelector((state)=>state.counterReducer.studentData)
  // console.log(studentData);
  // studentData.email
  // console.log(myEmail);

  useEffect(() => {  
    // let email = 'olatunbosunifeoluwa123@gmail.com'
    let studentToken = localStorage.studentToken
    const endpoint = "http://localhost:5000/student_info"
    axios.get(endpoint, {
      headers: {
        Authorization: studentToken,
        "Content-Type": "application/json",
        "Accept": "application/json"
      } 
    })
    .then((response) => {
      if(response.data.status){
      dispatch(studentInfo(response.data.response))
      }else{
        navigate("/StudentSignIn")
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [studentData])
  
  return (
    <>
    <div className="container-fluid kkkd">
  
         <div className=" OFF">
            <OffCanvas/>
         </div>

         <div className="DAS">
              <DashNav/>
              <div className="studDets">
                  <div className="wrapper">
                      <div className="studID">
                          <div className="studNo d-flex">
                             <h3><FaUserTie/></h3>
                             <h6 className="ms-5 mt-3"></h6>
                          </div>
                          <hr />
                           <p>Student ID</p>
                      </div>

                      <div className="studID">
                          <div className="studNo d-flex">
                             <h3><RiGraduationCapFill/></h3>
                             <h6 className="ms-5 mt-3">{studentData.firstname}</h6>
                          </div>
                          <hr />
                           <p>Programme</p>
                      </div>

                      <div className="studID">
                          <div className="studNo d-flex">
                             <h3><BiSolidSchool/></h3>
                             <h6 className="ms-5 mt-3"></h6>
                          </div>
                          <hr />
                           <p>College</p>
                      </div>
                      <div className="studID">
                          <div className="studNo d-flex">
                             <h3><MdOutlineAutoGraph/></h3>
                             <h6 className="ms-5 mt-3"></h6>
                          </div>
                          <hr />
                           <p>CGPA</p>
                      </div>
                  </div>
              </div> 

              <div className="msG">
                 <p>Welcome <span className="nM">{studentData.firstname}, {studentData.lastname}</span></p>
  
                 <p>To complete your course Registration, make sure you meet minimum payment requirements by going to the "Pay Tuition" section to settle all payments due for your programme duration.</p>
                 <br />
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptas aliquid ipsa culpa aliquam quae rerum, porro alias esse repudiandae eum ratione reiciendis! A quis, explicabo provident quod fugit sequi quos repellendus nobis eum odio!</p>
                 <br />
                 <p><span className="enQ">If you have any enquiry or difficulties please contact the Support Administrator by using the following information:</span><br/>
                 Email: ifeoluwaolatunbosun5@gmail.com<br/>
                 Support Lines: <span className="nuM">08135852287</span>(Whatsapp ONLY between 10:00am-2:00pm on Work days)
                 </p>
              </div>
               
         </div>
              
    </div>
       
    
    </>
  );
};

export default Dashboard;
