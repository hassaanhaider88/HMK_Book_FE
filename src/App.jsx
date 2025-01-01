import { useState } from 'react'
import './App.css'
import TikTokDownloader from './Components/EntireUI'
import HeroSection from './Components/HeroSection'

function App() {

  return (
    <div className=''>
    <div className='top-4 absolute flex justify-center items-center w-full h-screen overflow-hidden'>
       <img src="../Facebook-Logosu2.png" width={'90%'} className='opacity-75' height={'90%'} alt="" />
    </div>
    <div className='z-10 absolute w-full h-full'>
    {/* <TikTokDownloader/> */}
    <HeroSection />
    </div>
    </div>

  )
}

export default App
