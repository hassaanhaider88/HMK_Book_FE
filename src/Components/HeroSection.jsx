import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import FeatureComponent from './FeatureComponent'
import FAQs from './FAQs'
import  Footer from './Footer'

const HeroSection = () => {
  return (
    <div className='bg-[#1974ecf1] w-full min-h-[300vh]'>
      <NavBar/>
      <Hero/>
      <FeatureComponent/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default HeroSection