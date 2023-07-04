import React from 'react'

const Footer = () => {
    
  const myStyle = {
    width: '100px',
  };


  return (
    <>
    <div id="p-footer">
        <div className="phmf">
            <div className="phmf-container">

            <div className="ptivo">
                   <div className="f-header">
                      <img src="./Image/myLogo.png" alt="" style={myStyle} />
                   </div>
                    <div className="sMedia d-flex gap-4 text-center">
                      <a href=""><img src="Image/fb.svg" alt="" /></a>
                      <a href=""><img src="Image/tt.svg" alt="" /></a>
                      <a href=""><img src="Image/in.svg" alt="" /></a>
                      <a href=""><img src="Image/insta.svg" alt="" /></a>
                    </div>
                      
                    <div className="ptivo mt-3 py-3">
                       <div className="f-header p-0"><h6>Stakeholders</h6></div>
                   </div>

                   <div className="ptivo mt-3 d-flex text-light">
                       <div className="p-0"><h6>Ministry of Education</h6></div>
                        <div className="p-0 ms-3"><h6>NUC</h6></div>
                   </div>
               </div>
                <div className="ptivo">
                   <div className="f-header"><h6>Get in touch</h6></div>
                   <ul>
                    <li>Campuses</li>
                    <li>Giving/Donations</li>
                    <li>Enterprises</li>
                    <li>Calenders</li>
                    <li>Global Locations</li>
                    <li>Health & Safety</li>
                    <li>News</li>
                    <li>Academic Research Journal</li>
                    <li>Entrepreneurship</li>
                    <li>Alumni</li>
                    <li>Careers</li>
                   </ul>
                </div>
                <div className="ptivo">
                   <div className="f-header"><h6>Colleges</h6></div>
                   <ul>
                    <li>College of HTML & CSS</li>
                    <li>College of Javascript </li>
                    <li>College of MERN Stack</li>
                    <li>College of Angular</li>
                    <li>College of PHP</li>
                    <li>College of SQL</li>
                   </ul>
                </div>
                <div className="ptivo">
                   <div className="f-header"><h6>Quick Links</h6></div>
                   <ul className="">
                    <li>Contact Us</li>
                    <li>Staff Webmail</li>
                    <li>Pre-Degree Portal</li>
                    <li>Students Portal</li>
                    <li>Site Map</li>
                   </ul>
                </div>
                <div className="ptivo">
                   <div className="f-header"><h6>Download & Resources</h6></div>
                   <ul className="">
                    <li>Downloads/Resources</li>
                    <li>Journals</li>
                    <li>Publications</li>
                    <li>Inaugural Lectures</li>
                    <li>Code of Conduct</li>
                    <li>Speeches</li>
                   </ul>
                </div>
                
            </div>
        </div>


         <div className="copyW">
             <div className="text-center">Copyright © 2021 IFZY. All rights reserved.</div>
         </div>
    </div>
    
    
    
    </>
  )
}

export default Footer