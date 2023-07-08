import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../src/components/Navbar'
import Hero from '../../src/components/Hero'
import About from '../../src/components/About'
import Colleges from '../../src/components/Colleges'
import Welcome from '../../src/components/Welcome'
import Footer from '../../src/components/Footer'
import Start from '../../src/components/Start'



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