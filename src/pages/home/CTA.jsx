import React from 'react'
import TextBorder from '../../components/TextBorder'
import '../../fonts.css'
import { Link } from 'react-router'

const CTAHome = () => {
  return (
    <div className='text-center w-full flex flex-col  justify-center items-center gap-8 my-10'>
        <div className='flex flex-col justify-center items-center oswald-medium text-2xl text-slate-800'>
            <img className='z-10' src="logo-round.png" alt="" />
            <div className='flex flex-col md:flex-row gap-10 items-center bg-black text-[#d0d8b8] px-10 py-5 rounded-2xl -mt-5 md:-mt-10'>
                <h1>Subscribe to get the latest updates in a moment!!!</h1>

                <a target='_blank' href='https://www.instagram.com/kitpd2s_kiit/' class="relative inline-block text-lg group">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#000] rounded-lg group-hover:text-black">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#d0d8b8] group-hover:-rotate-180 ease"></span>
                        <span class="relative uppercase italic">Subscribe</span>
                    </span>
                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>

            </div>
        </div>

      <TextBorder text={'KITPD2S'} />
    </div>
  )
}

export default CTAHome
