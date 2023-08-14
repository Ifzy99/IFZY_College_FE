import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home Pages/Home'
import StudentSignUp from '../Pages/Student Pages/signUp&signIn/StudentSignUp'
import StudentSignIn from '../Pages/Student Pages/signUp&signIn/StudentSignIn'
import StaffSignUp from '../Pages/Staff Pages/StaffSignUp'
import StaffSignIn from '../Pages/Staff Pages/StaffSignIn'
import Dashboard from '../Pages/Student Pages/dashboard/dashB/Dashboard'
import History from '../Pages/Home Pages/about/History'
import Mission from '../Pages/Home Pages/about/Mission'
import Basic from '../Pages/Home Pages/programmes/basic/Basic'
import Professional from '../Pages/Home Pages/programmes/prof/Professional'
import Masters from '../Pages/Home Pages/programmes/masters/Masters'
import ChangePass from '../Pages/Student Pages/dashboard/changePassword/ChangePass'
import Profile from '../Pages/Student Pages/dashboard/profile/Profile'
import Documents from '../Pages/Student Pages/dashboard/docx/Documents'
import Notice from '../Pages/Student Pages/dashboard/notice board/Notice'
import EditPg from '../Pages/Student Pages/dashboard/profile/EditPg'
import Card from './components/landing Pg/Card'
import SignIn from '../Pages/SignIn'
import ModeOfStdy from '../Pages/Home Pages/admissions/MOS/ModeOfStdy'
import Apply from '../Pages/Home Pages/admissions/applyForProg/Apply'
import FAQ from '../Pages/Home Pages/admissions/faq/FAQ'
import Accordion from './components/landing Pg/Accordion'
import Tuition from '../Pages/Home Pages/admissions/tuition/Tuition'
import News from '../Pages/Home Pages/news/News'
import CourseReg from '../Pages/Student Pages/dashboard/courseReg/CourseReg'
import Payment from '../Pages/Student Pages/dashboard/pay tuition/Tuition'




function App() {
  // const [count, setCount] = useState(0)
  let studentToken = localStorage.studentToken

  return (
    <>
     
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/StudentSignUp" element={<StudentSignUp/>}/>
           <Route path='/StudentSignIn' element={<StudentSignIn/>}/>
           <Route path= "/admin/SignUp" element={<StaffSignUp/>}/>
           <Route path= "/admin" element={<StaffSignIn/>}/>
           <Route path= "/dashboard" element={studentToken ? <Dashboard/> : <StudentSignIn/>}/>
           <Route path= "/history" element={<History/>}/>
           <Route path= "/mission" element={<Mission/>}/>
           <Route path= "/basic" element={<Basic/>}/>
           <Route path= "/professional" element={<Professional/>}/>
           <Route path="/masters" element={<Masters/>}/>
           <Route path="/changePassword" element={<ChangePass/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/docs" element={<Documents/>}/>
           <Route path="/notices" element={<Notice/>}/>
           <Route path="/course-registration" element={<CourseReg/>}/>
           <Route path="/pay-tuition" element={<Payment/>}/>
           <Route path="/profile/editPg" element={<EditPg/>}/> 
           <Route path="/card" element={<Card/>}/> 
           <Route path="/mode-of-study" element={<ModeOfStdy/>}/>
           <Route path="/apply-for-a-programme" element={<Apply/>}/>
           <Route path="/faq" element={<FAQ/>}/>
           <Route path="/tuition" element={<Tuition/>}/>
           <Route path="/news" element={<News/>}/>
           <Route path="/sn" element={<SignIn/>}/>
           <Route path="/accordion" element={<Accordion/>}/>


         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
