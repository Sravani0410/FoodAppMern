import React from 'react'
import logo from "../assest/logo.png"
const Header = () => {
  return (
    // px-2 is mobile version and md:px-4 is desktop version
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
    {/* Desktop */}
    <div className='flex items-center h-full'>
        <div className='h-12'>
            <img src={logo} className='h-full'/>
        </div>
    </div>
     {/* mobile */}
    </header>
  )
}

export default Header