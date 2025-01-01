import React from 'react'
import { GiSpellBook } from 'react-icons/gi'

const Footer = () => {
  return (
    <div>
              {/* Footer */}
      <footer className="border-gray-800/50 bg-slate-900 py-8 border-t">
        <div className="mx-auto px-6 container">
          <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-1">
            <span className='mb-1 text-[#c7cfe0] text-[22px]'><GiSpellBook /></span>
            <span className="font-semibold text-white text-xl">HMKBookPosts</span>
          </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer