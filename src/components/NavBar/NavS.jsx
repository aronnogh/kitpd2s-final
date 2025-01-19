import React from 'react'
import { BsBox2Fill, BsBriefcaseFill, BsEnvelopeFill, BsFillCalendar3RangeFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { RiHome3Fill } from 'react-icons/ri'
import { Link } from 'react-router'

const NavS = () => {
  return (
    <div className='flex justify-center items-center flex-row bg-white'>
      <div className='flex fixed bottom-0 md:hidden flex-row justify-around border-2 border-zinc-800 w-5/6 mx-auto items-center py-3 rounded-lg oswald-regular text-md bg-white z-50'>
        <Link to={'/'}><RiHome3Fill /></Link>
        <Link to={'/about-us'}><BsBriefcaseFill /></Link>
        <Link to={'/team'}><FaUsers /></Link>
        {/* <Link to={'/portfolio'}><BsBox2Fill /></Link> */}
        <Link to={'/gallery'}><BsFillCalendar3RangeFill /></Link>
        <Link to={'/contact-us'}><BsEnvelopeFill /></Link>
      </div>
    </div>
  )
}

export default NavS
