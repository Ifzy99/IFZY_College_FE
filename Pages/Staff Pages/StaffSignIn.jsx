import React from 'react'
import { Link } from 'react-router-dom'
import "./staff.css"

const StaffSignIn = () => {
  return (
    <>
       <div className="adminPg">
          <div className="col-lg-6 col-sm-11 mx-auto mt-5 pt-5 shadow-lg stP">
              <center className="adminHeader p-4">
                  <img src="Image/myLogo.png" alt="" className="adminImg" />
              </center>
             

          <div class="inputContainer form-group my-5 pt-2">
            <input
              required="required"
              id="inputField"
              placeholder="Email"
              type="text"
            />
            <label class="usernameLabel" for="inputField">
              Email
            </label>
            <svg viewBox="0 0 448 512" class="userIcon">
               <i class="fa-solid fa-envelope"></i>
            </svg>
          </div>

          <div class="inputContainer form-group my-5 pt-2">
            <input
              required="required"
              id="inputField"
              placeholder="Password"
              type="text"
            />
            <label class="usernameLabel" for="inputField">
              Password
            </label>
            <svg viewBox="0 0 448 512" class="userIcon">
               <i class="fa-solid fa-lock"></i>
            </svg>
          </div>

          <center className="form-group myBtn my-3 py-3">
            <button
               className="btn btn-dark btn-outline-secondary text-light signUpBtn"
               type="submit">
               Submit
            </button>
        </center>
  
          </div>
       
       </div>
    </>
  )
}

export default StaffSignIn