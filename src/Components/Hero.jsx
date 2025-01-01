import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { BiSolidFileFind } from "react-icons/bi";
const Hero = () => {
  const [videoUrl, setVideoUrl] = useState('');
 const Images = [
  {
   ImgURI : '../../Facebook-Logosu2.png',
   ImgText : 'Hello1'
  },
  {
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello1'
   },
   {
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello1'
   }, {
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello1'
   }, {
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello1'
   }, {
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello1'
   },
  {
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello2'
   },{
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello3'
   },{
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello4'
   },{
    ImgURI : '../../Facebook-Logosu2.png',
    ImgText : 'Hello5'
   },
   
 ]
  return (
    <div>
          {/* Hero Section */}
      <div id="home" className="bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.15)_0%,_rgba(15,23,42,1)_100%)] pt-14 min-h-[90vh]">
        <div className="relative mx-auto px-6 pt-20 pb-32 container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 font-bold text-6xl leading-tight">
              <span className="bg-clip-text bg-gradient-to-r from-[#7541cf] via-[#7541cf] to-[#1900ff] text-transparent">Download FaceBook</span><br/>
              <span className="bg-clip-text bg-gradient-to-r from-[#7541cf] via-[#7541cf] to-[#1900ff] text-transparent">Posts by Link!</span>
            </h1>
            
            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="flex justify-center items-center gap-1">
                <div className="text-white">
                  <FaCircleCheck/>
                </div>
                <span className="font-semibold text-sm">Unlimited Downloads</span>
              </div>
              <div className="flex justify-center items-center gap-1">
              <div className="text-white">
                  <FaCircleCheck/>
                </div>
                <span className="font-semibold text-sm">No Watermark!</span>
              </div>
            </div>

            <form className="relative mx-auto mb-20 max-w-xl">

            <div className="relative w-full">
             <FaLink className="top-1/2 left-4 absolute text-gray-400 transform -translate-y-1/2" />
               <input
                  type="text"
                  placeholder="Paste link here!"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                className="border-gray-700 bg-gray-800/50 px-6 py-4 pl-12 border focus:border-blue-800 rounded-full w-full text-sm focus:outline-none"
                    />
                </div>
              <button
                type="submit"
                className="top-[2px] right-1 absolute bg-gradient-to-r from-[#8B5CF6] via-[#7541cf] to-[#1900ff] hover:opacity-90 px-8 py-[14px] rounded-full font-medium text-sm text-white transition-opacity duration-300 hover:scale-95"
              >
               Find Out
              </button>
            </form>

            {/* Phone Mockups */}
            <div className="relative flex justify-center items-center gap-1 custom-scrollbar py-16 pl-5 min-w-screen overflow-x-auto">
               
             {
              Images.map((Img,idx)=>{
                return <img key={idx} src={`${Img.ImgURI}`} alt={`${Img.ImgText}`} className={`${idx === 0 ? "ml-24" : "ml-0"} drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] rounded-[2.5rem] w-[280px] filter`} />
              })
             }
            </div>
          </div>
          <div className='flex justify-center items-center mt-10 w-full'>
         
          <button className="button">
              <div className="dots_border"></div>
              
              <span className="font-bold text_button">Download PDF</span>
         </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero