import React from 'react'

const Colleges = () => {
   
       

  return (
    <>
      <div className="collegeCont">
      <div className="collegeHeader">
          <h2>OUR COLLEGES</h2>
      </div>

      <div className="colList">
         <div className="colWrapper">
             <div className="col shadow">
               <div className="colImg">
                  <h6>HTML & CSS Campus</h6> 
               </div>
             </div>
             
             <div className="col shadow">
             <div className="colImg1">
               <h6>Javscript Campus</h6>
             </div>

             </div>
             <div className="col shadow">
             <div className="colImg2">
              <h6>MERN Stack Campus</h6> 
              </div>
             </div>
             
             <div className="col shadow">
             <div className="colImg3">
              <h6>Angular Campus </h6>
             </div>
             </div>

             <div className="col shadow">
             <div className="colImg4">
             <h6>PHP Campus </h6>
             </div>
             </div>
             
             <div className="col shadow">
             <div className="colImg5">
             <h6>SQL Campus </h6>
             </div>
             </div>
         </div>
      </div>
      
      
      </div>
       

    </>
  )
}

export default Colleges