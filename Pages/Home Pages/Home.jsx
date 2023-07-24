import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../src/components/landing Pg/Navbar'
import Hero from '../../src/components/landing Pg/Hero'
import About from '../../src/components/landing Pg/About'
import Colleges from '../../src/components/landing Pg/Colleges'
import Welcome from '../../src/components/landing Pg/Welcome'
import Footer from '../../src/components/landing Pg/Footer'
import Start from '../../src/components/landing Pg/Start'



const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Start/>
      <About/>
      <Colleges/>
      <Welcome/>
      <Footer/>
    </>
  ) 
}

export default Home