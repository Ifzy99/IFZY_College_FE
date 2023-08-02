import React from 'react'
import "../addmission.css"
import Navbar from '../../../../src/components/landing Pg/Navbar'
import { Link } from 'react-router-dom'


const Apply = () => {
  return (
    <>
     <Navbar/>
     <div className="applyCont">
       <div className="topPg">
         <h2>Apply For A Program</h2>
       </div>

       <div className="acaProg">
          <div className="classHeader">
             <h3>ACADEMIC PROGRAMS</h3>
          </div>
          <div className="acaWrapper">
               <div className="degCont">
               
                   <a href="#baSic">
                   <div className="degContItems">
                   <img src="Image/award.png" alt=""/>
                   <h3 className="mt-4">Basic Degree Program</h3>
                   </div>
                   </a>
               </div>
               <div className="profDeg">
                   <a href="#prF">
                     <div className="degContItems">
                         <img src="Image/award.png" alt="" />
                         <h3 className="mt-4">Professional Degree Program</h3>
                     </div>
                   </a>
               </div>
               <div className="degCont">
                   <a href="#msT">
                   <div className="degContItems">
                   <img src="Image/award.png" alt=""/>
                   <h3 className="mt-4">Master Degree Program</h3>
                   </div>
                   </a>
               </div>
          </div>
       </div>

       <div className="acaInfo">
           <div className="basicDeg mt-5 pt-5" id="baSic">
               <div className="infoHeader">
                  <h3>Basic Degree Program</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat cum delectus assumenda!</p>
               </div>
               <div className="infoTxt">
                 <h5>ELIGIBILITY</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, velit nostrum qui deleniti maiores similique tempora aliquam accusantium ipsum aut ab eaque dignissimos deserunt dicta voluptas quibusdam dolores voluptatem, perspiciatis aliquid delectus.</p>
                 <h5>DURATION OF PROGRAM</h5>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam veritatis soluta est adipisci quis, maxime alias dolorum necessitatibus eius odio impedit deleniti officia tenetur dolores, suscipit eos. Eius est, cum eveniet totam dicta possimus, eligendi consequuntur accusantium aperiam enim sapiente! Aut quae odio cum praesentium eveniet. Omnis ex eos corrupti, aut accusantium blanditiis iure illum.</p>
                 <h5>REGISTRATION STEPS</h5>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quos vero sed mollitia velit tenetur facere, porro quidem commodi vitae. Voluptas quidem aliquid mollitia recusandae exercitationem cupiditate incidunt repellat reiciendis iure laudantium. Quam in nostrum dignissimos deserunt quibusdam. Expedita nulla ad perferendis, odit quia alias optio praesentium consequuntur repudiandae magnam fugiat molestias aliquam debitis fugit!</p>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquam in perspiciatis hic inventore dolore odio et quas ducimus. Temporibus quae sunt, architecto natus perspiciatis, laboriosam nesciunt, quis labore facere nemo totam nobis facilis debitis dolores autem provident illo doloribus fugiat.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi officia cupiditate modi ullam cumque sunt.</p>
               </div>
               <div className="infoBtn">
               <Link>
               <button className="acaInfoBtn">
               <span>
                 Apply for our Basic Degree Program
               </span>
               </button>
               </Link>
               </div>

               
           </div>

           <div className="prfDeg pt-5 mt-5 py-5 my-5" id="prF">
           <div className="infoHeader">
              <h3>Professional Degree Program</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat cum delectus assumenda!</p>
           </div>
           <div className="infoTxt">
             <h5>ELIGIBILITY</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, velit nostrum qui deleniti maiores similique tempora aliquam accusantium ipsum aut ab eaque dignissimos deserunt dicta voluptas quibusdam dolores voluptatem, perspiciatis aliquid delectus.</p>
             <h5>REQUIREMENTS</h5>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam veritatis soluta est adipisci quis, maxime alias dolorum necessitatibus eius odio impedit deleniti officia tenetur dolores, suscipit eos. Eius est, cum eveniet totam dicta possimus, eligendi consequuntur accusantium aperiam enim sapiente! Aut quae odio cum praesentium eveniet. Omnis ex eos corrupti, aut accusantium blanditiis iure illum.</p>
             <h5>MODE OF APPLICATION</h5>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quos vero sed mollitia velit tenetur facere, porro quidem commodi vitae. Voluptas quidem aliquid mollitia recusandae exercitationem cupiditate incidunt repellat reiciendis iure laudantium. Quam in nostrum dignissimos deserunt quibusdam. Expedita nulla ad perferendis, odit quia alias optio praesentium consequuntur repudiandae magnam fugiat molestias aliquam debitis fugit!</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi officia cupiditate modi ullam cumque sunt.</p>
           </div>
           <div className="infoBtn">
           <Link>
           <button className="acaInfoBtn">
           <span>
             Apply for our Professional Degree Program
           </span>
           </button>
           </Link>
           </div>

           
       </div>

       <div className="masterDeg" id="msT">
       <div className="infoHeader">
          <h3>Masters Degree Program</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat cum delectus assumenda!</p>
       </div>
       <div className="infoTxt">
         <h5>ELIGIBILITY</h5>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, velit nostrum qui deleniti maiores similique tempora aliquam accusantium ipsum aut ab eaque dignissimos deserunt dicta voluptas quibusdam dolores voluptatem, perspiciatis aliquid delectus.</p>
         <h5>REQUIREMENTS</h5>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam veritatis soluta est adipisci quis, maxime alias dolorum necessitatibus eius odio impedit deleniti officia tenetur dolores, suscipit eos. Eius est, cum eveniet totam dicta possimus, eligendi consequuntur accusantium aperiam enim sapiente! Aut quae odio cum praesentium eveniet. Omnis ex eos corrupti, aut accusantium blanditiis iure illum.</p>
         <h5>MODE OF APPLICATION</h5>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquam in perspiciatis hic inventore dolore odio et quas ducimus. Temporibus quae sunt, architecto natus perspiciatis, laboriosam nesciunt, quis labore facere nemo totam nobis facilis debitis dolores autem provident illo doloribus fugiat.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi officia cupiditate modi ullam cumque sunt.</p>
       </div>
       <div className="infoBtn">
       <Link>
       <button className="acaInfoBtn">
       <span>
         Apply for our Masters Degree Program
       </span>
       </button>
       </Link>
       </div>
   </div>

       </div>

     </div>
     
     

     
    </>
  )
}

export default Apply