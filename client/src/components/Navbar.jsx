import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate()
    const {user} = useUser()
    const {openSignIn} = useClerk()
  return (
<div className="fixed z-50 w-full backdrop-blur-2xl py-0">
  <div className="max-w-6xl mx-auto flex justify-between items-center h-20 px-4 sm:px-10">
    <img 
      src={assets.logo} 
      alt="logo" 
      className="h-12 sm:h-32 cursor-pointer" 
      onClick={() => navigate('/')} 
    />

    {
      user ? (
        <UserButton />
      ) : (
        <button 
          onClick={openSignIn} 
          className="flex items-center gap-2 rounded-full text-sm
                     cursor-pointer bg-primary text-white px-8 py-2">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )
    }
  </div>
</div>


  )
}

export default Navbar