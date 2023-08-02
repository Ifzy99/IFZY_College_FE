import React from "react";
import "./dashNav.css";
import { Link } from "react-router-dom";
import {IoIosNotifications } from 'react-icons/io';
import {FaUserAlt,FaEnvelope,}  from'react-icons/fa';
import { MdNotificationImportant} from 'react-icons/md';




const DashNav = () => {
  return (
    <>
    <div className="topPg">
    <div className="dashNavImg">
      <img src="Image/myLogo.png" alt="" className="d-lg-none" style={{width:"100px"}} />
    </div>
    <div className="topPgIcon">
        <Link className="iconLink" to="/notices">
        <h3><IoIosNotifications/></h3>
        </Link>

        <h4><FaUserAlt/></h4>
        <h3><FaEnvelope/></h3>
        <h3><MdNotificationImportant/></h3>
    </div>
 </div>
    </>
  );
};

export default DashNav;
