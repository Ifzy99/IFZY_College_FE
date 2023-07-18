import React from "react";
import "./off.css";
import { MdDashboard, MdNotificationImportant } from 'react-icons/md';
import {BiUserPin, BiSolidLock, BiSolidUser } from 'react-icons/bi';
import {RiQuestionnaireLine } from 'react-icons/ri';
import {IoIosNotifications } from 'react-icons/io';
import {FaWallet, FaFileDownload, FaHistory } from 'react-icons/fa';
import {AiFillFile} from 'react-icons/ai';
import { Link } from "react-router-dom";















const OffCanvas = () => {
  return (
    <>
      <button
        className="btn  d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div
        className="offcanvas-lg offcanvas-start"
        tabIndex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-body d-flex flex-column">
         
          <img
              src="Image/myLogo.png"
              alt=""
              style={{ width:"120px", margin:"0 auto"}}
            />

            <div className="offCanvCont">
               <h5>General</h5>

               <Link className="offlink" to="/dashboard">
               <div className="offCanvItem">
                <h4><MdDashboard/></h4>
                <p className="mt-2 ms-3">Dashboard</p>
               </div>
               </Link>

            </div>
            <div className="offCanvCont">
               <h5>Profile</h5>
                
               <Link className="offlink" to="/profile">
               <div className="offCanvItem">
                <h4><BiSolidUser/></h4>
                <p className="mt-2 ms-3">My Profile</p>
               </div>
               </Link>

               <Link className="offlink" to="/changePassword">
               <div className="offCanvItem">
                <h4><BiSolidLock/></h4>
                <p className="mt-2 ms-3">Change Password</p>
                </div>
                </Link>

                <Link className="offlink" to="/docs">
                <div className="offCanvItem">
                <h4><AiFillFile/></h4>
                <p className="mt-2 ms-3">Documents</p>
               </div>
               </Link>

            </div>
            <div className="offCanvCont">
               <h5>Academics</h5>
               <div className="offCanvItem">
                <h4><MdNotificationImportant/></h4>
                <p className="mt-2 ms-3">Course Registration</p>
               </div>
               <div className="offCanvItem">
                <h4><FaFileDownload/></h4>
                <p className="mt-2 ms-3">Resources</p>
               </div>
               <div className="offCanvItem">
                <h4><FaHistory/></h4>
                <p className="mt-2 ms-3">Registration History</p>
               </div>
            </div>
            <div className="offCanvCont">
               <h5>Payments</h5>
               <div className="offCanvItem">
                <h4><FaWallet/></h4>
                <p className="mt-2 ms-3">Pay Tuition</p>
               </div>
               <div className="offCanvItem">
                <h4><FaWallet/></h4>
                <p className="mt-2 ms-3">Payment History</p>
               </div>
               <div className="offCanvItem">
                <h4><FaWallet/></h4>
                <p className="mt-2 ms-3">Transaction History</p>
               </div>
            </div>
            <div className="offCanvCont">
               <h5>Others</h5>

                <Link className="offlink" to="/notices">
               <div className="offCanvItem">
                <h4><IoIosNotifications/></h4>
                <p className="mt-2 ms-3">Notice Board</p>
               </div>
               </Link>
               
               <div className="offCanvItem">
                <h4><RiQuestionnaireLine/></h4>
                <p className="mt-2 ms-3">Help</p>
               </div>
               <div className="offCanvItem">
                <h4><BiUserPin/></h4>
                <p className="mt-2 ms-3">Logout</p>
               </div>
            </div>
          
           
           
        
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
