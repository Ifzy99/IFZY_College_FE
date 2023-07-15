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
import Dashboard from '../Pages/Student Pages/dashboard/Dashboard'
import History from '../Pages/Home Pages/about/History'
import Mission from '../Pages/Home Pages/about/Mission'
import Basic from '../Pages/Home Pages/programmes/basic/Basic'
import Professional from '../Pages/Home Pages/programmes/prof/Professional'
import Masters from '../Pages/Home Pages/programmes/masters/Masters'
import ChangePass from '../Pages/Student Pages/dashboard/changePassword/ChangePass'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/StudentSignUp" element={<StudentSignUp/>}/>
           <Route path='/StudentSignIn' element={<StudentSignIn/>}/>
           <Route path= "/admin/SignUp" element={<StaffSignUp/>}/>
           <Route path= "/admin" element={<StaffSignIn/>}/>
           <Route path= "/dashboard" element={<Dashboard/>}/>
           <Route path= "/history" element={<History/>}/>
           <Route path= "/mission" element={<Mission/>}/>
           <Route path= "/basic" element={<Basic/>}/>
           <Route path= "/professional" element={<Professional/>}/>
           <Route path="/masters" element={<Masters/>}/>
           <Route path="/changePassword" element={<ChangePass/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
