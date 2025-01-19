import React from 'react'
import { Link } from 'react-router'
import '../../fonts.css'

const NavL = () => {
  return (
    <>
    <div className='hidden fixed z-50 top-0 left-1/2 transform -translate-x-1/2 md:flex flex-row justify-around border-2 border-zinc-800 w-5/6 mx-auto items-center py-3 rounded-lg oswald-regular text-md bg-white'>
      {/* logo  */}
      <Link to={'/'}><img src="/logo.jpg" alt="KITPD2S" /></Link>
      
      <div className='flex flex-row justify-around items-center gap-8'>
        <Link to={'/about-us'}>About Us</Link>
        <Link to={'/team'}>Team</Link>
        {/* <Link to={'/portfolio'}>Portfolio</Link> */}
        <Link to={'/gallery'}>Gallery</Link>
        <Link to={'/contact-us'}>Contact Us</Link>
      </div>

      <div>
        <Link href="/" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Register Now!!!</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </Link>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  )
}

export default NavL
