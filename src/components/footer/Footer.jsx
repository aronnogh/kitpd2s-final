import React from 'react'
import { Link } from 'react-router'
import '../../fonts.css'
import { BsBox2Fill, BsBriefcaseFill, BsEnvelopeFill, BsFillCalendar3RangeFill } from 'react-icons/bs'
import { FaFacebook, FaHeart, FaUsers, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill, RiTwitterXLine } from 'react-icons/ri'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Simple Wave SVG */}
      <div className="w-full bg-black">
        <svg 
          className="w-full h-24"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 L1440,0 L1440,20 Q720,100 0,20 L0,0 Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className='bg-black -mt-1'> {/* Negative margin to remove any gap */}
        <div className='flex flex-col md:flex-row justify-around items-start text-white'>
          {/* left section */}
          <div className='flex flex-col justify-start gap-5 w-2/3 mx-5'>
            <img src="/logo-round.png" alt="" className='w-[190px] mx-auto md:mx-0 border-2 border-white rounded-full'/>
            <h1 className='text-7xl oswald-bold'>KITPD2S</h1>
            <p className='poppins-medium-italic'>KIIT INDUSTRY 4.0 TECHNOLOGY BASED PRODUCT DESIGN AND DEVELOPMENT SOCIETY.</p>
          </div>

          <div className='w-[100vw] h-1 bg-black my-4 md:hidden'></div>

          {/* middle section */}
          <div className='flex flex-col justify-around items-start gap-8 w-2/3 md:w-1/3 mx-5 md:mx-0'>
            <Link to={'/about-us'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><BsBriefcaseFill size={20} />About Us</Link>
            <Link to={'/team'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><FaUsers size={20} />Team</Link>
            {/* <Link to={'/portfolio'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><BsBox2Fill size={20} />Portfolio</Link> */}
            <Link to={'/gallery'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><BsFillCalendar3RangeFill size={20} />Gallery</Link>
            <Link to={'/contact-us'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><BsEnvelopeFill size={20} />Contact Us</Link>
          </div>

          <div className='w-[100vw] h-1 bg-black my-4 md:hidden'></div>

          {/* right section */}
          <div className='flex flex-col justify-around items-start gap-8 w-2/3 md:w-1/3 mx-5 md:mx-0'>
            <a target='_blank' rel="noopener noreferrer" href={'https://www.facebook.com/profile.php?id=61571508680486'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><FaFacebook size={20} />Facebook Page</a>
            <a target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/kitpd2s_kiit/'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><RiInstagramFill size={20} />Instagram Handle</a>
            <a target='_blank' rel="noopener noreferrer" href={'https://www.linkedin.com/in/kitpd2s-society-b8511b333/'} className='flex flex-row gap-5 items-center hover:scale-95 transition-transform'><AiFillLinkedin size={20} />LinkedIn</a>
          </div>
        </div>

        {/* Credits Section */}
        <div className='py-3 md:flex flex-col md:flex-row justify-around items-center bg-[#d0d8d7] text-black poppins-light'>
          <span className='px-3'>♥Planning and made everything ready by <b className='text-purple-500 font-bold'>Koushik Paul</b> <a target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/_koushik_paul__/'} className='underline italic text-purple-700'>[Let's Discuss]</a>🚀</span>

          <div className='w-[100vw] h-1 bg-white my-4 md:hidden'></div>

          <span className='px-3'>♥Crafted with passion and a dash of genius by <b className='text-green-500 font-bold'>Aronno Ghosh</b> <a target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/koushik_aronno_647433/'} className='underline italic text-green-700'>[Let's Discuss]</a>🚀</span>
        </div>
      </div>
    </div>
  )
}

export default Footer