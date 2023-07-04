import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import StudentSignUp from '../Pages/Student Pages/StudentSignUp'
import StudentSignIn from '../Pages/Student Pages/StudentSignIn'
import StaffSignUp from '../Pages/Staff Pages/StaffSignUp'
import StaffSignIn from '../Pages/Staff Pages/StaffSignIn'
import Dashboard from '../Pages/Student Pages/Dashboard'
import History from '../Pages/Home Pages/History'
import Mission from '../Pages/Home Pages/Mission'




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
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
