import React, { useState } from 'react'
import { GiSpellBook } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import { IoCloseSharp } from 'react-icons/io5';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [IsMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
{/* Navigation */}
    <nav className="top-5 left-1/2 z-[100] fixed bg-[rgba(88,28,135,0.15)] mx-auto px-6 py-2 rounded-[40px] text-white -translate-x-1/2 container">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <span className='mb-1 text-[#c7cfe0] text-[22px]'><GiSpellBook /></span>
            <span className="font-semibold text-xl">HMKBookPosts</span>
          </div>
          <div className="md:flex items-center gap-8 hidden">
          <button onClick={() => setActiveTab('home')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'home' ? 'text-black' : ''}`}>
             <a href="#home">Home</a>
            </button>
            <button onClick={() => setActiveTab('aboutme')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'aboutme' ? 'text-black' : ''}`}>
             <a href="" onClick={()=>windows.open('https//:www.hassaan-haider.netlify.app')}>About Me</a> 
             </button>
            <button onClick={() => setActiveTab('extension')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'extension' ? 'text-black' : ''}`}>
              <a href="#findus">FindUs</a>
            </button>
            <button onClick={() => setActiveTab('faq')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'faq' ? 'text-black' : ''}`}>
             <a href="#faqs">FAQs</a> 
          </button> 
          </div>
          <button className="md:block border-[2px] hidden bg-white hover:bg-gray-100 px-6 py-2 hover:border-blue-700 rounded-full font-semibold text-[16px] text-black text-gra18900 hover:text-blue-800 transition-colors hover:outline-double outline-blue-500">
              Contact
          </button>
         

          <button onClick={()=>setIsMenuOpen(!IsMenuOpen)} className="block border-[2px] md:hidden px-2 py-2 hover:border-blue rounded-full text-[26px] text-white hover:text-blue-800 transition-colors duration-300 hover:scale-95">
            { IsMenuOpen ? <IoCloseSharp />   : <CgMenuGridR/> }
          </button>
        </div>
      </nav>
      {/* // mobile view Navbar goes here */}
      <div className={`${IsMenuOpen ? "block" : "hidden"} top-20 right-5 z-50 fixed text-white bg-gradient-to-l from-[#7541cf] via-[#af86ddd7] to-[#fff] px-3 py-2 rounded-2xl w-[90%]`}>
        
      <div className="flex flex-col items-center gap-3">
            <button onClick={() => setActiveTab('home')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'home' ? 'text-black' : ''}`}>
             <a href="#home">Home</a>
            </button>
            <button onClick={() => setActiveTab('aboutme')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'aboutme' ? 'text-black' : ''}`}>
             <a href="" onClick={()=>windows.open('https//:www.hassaan-haider.netlify.app')}>About Me</a> 
             </button>
            <button onClick={() => setActiveTab('extension')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'extension' ? 'text-black' : ''}`}>
              <a href="#findus">FindUs</a>
            </button>
            <button onClick={() => setActiveTab('faq')} className={`text-[18px] font-semibold hover:text-black ${activeTab === 'faq' ? 'text-black' : ''}`}>
             <a href="#faqs">FAQs</a> 
          </button>
            

          </div>
          <button className="border-[2px] bg-white hover:bg-gray-100 px-6 py-2 rounded-full font-semibold text-[16px] text-black text-gra18900 hover:text-blue-800 transition-colors hover:outline-double outline-blue-500">
              Contact
          </button>


      </div> 
    </div>


  )
}

export default NavBar