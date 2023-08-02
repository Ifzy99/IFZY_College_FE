import React, { useEffect, useState } from "react";
import "./cp.css";
import OffCanvas from "../../../../src/components/student Dashboard/offCanvas Comp/OffCanvas";
import DashNav from "../../../../src/components/student Dashboard/dashboardNav/DashNav";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { studentInfo } from "../../../../src/redux/counterSlice";






const ChangePass = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async ()=>{
    try{
      const response = await fetch ("http://localhost:5000/update_info",{
        method: "POST",
        headers:{
          "Content-type":"application/json",
        },
        body: JSON.stringify({oldPassword, newPassword}),
      });
      const data = await response.json();
      console.log(data);
    }catch(error){
      console.error("Error", error)
    }
  }
  // let dispatch = useDispatch()

  // useEffect(() => {
  //   let email = 'olatunbosunifeoluwa123@gmail.com'
  //     let endpoint = "http://localhost:5000/student_info"
  //     axios.get(endpoint, {
  //       headers: {
  //         Authorization: email,
  //         'Content-Type': "application/json"
  //       }
  //     })
  //     .then((response) => {
  //       // console.log(response.data.response);
  //       dispatch(studentInfo(response.data.response))
  
  //     })
  // },)


  // let studentData = useSelector((state)=>state.counterReducer.studentData)
  // let userEmail = studentData.email
  // let updateData = useFormik({
  //   initialValues:{
  //     password:"",
  //     newPass:"",
  //   },
  //   onSubmit:(values)=>{
  //     // console.log(values);
  //     let newValue = {...values, userEmail}
  //     console.log(newValue);

  //     const endpoint = "http://localhost:5000/update_info"
  //     axios.post(endpoint, newValue)
  //     .then((response)=>{
  //         console.log(response);
  //     })
  //   }
  // })

  
  return (
    <>
      <div className="container-fluid changePassCont">
        <div className="OFF">
          <OffCanvas />
        </div>

        <div className="BOD">
          <DashNav />
          <div className="changePassBdy shadow-lg">
            <div className="cont ">
              <h6>CHANGE PASSWORD</h6>
              <form action="">
                <div className="form-group my-3">
                  <label htmlFor="inputField">Old Password</label>
                  <input type="text" className="form-control" name="password" value={oldPassword}  onChange={(e) => setOldPassword(e.target.value)}  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="inputField">New Password</label>
                  <input type="text" className="form-control" name="newPass" value={newPassword}  onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="inputField">Confirm New Password</label>
                  <input type="text" className="form-control" />
                </div>
                 <div className="form-group my-3 py-">
                <button className="changeBtn" type="submit" onClick={handleChangePassword}>Change Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
