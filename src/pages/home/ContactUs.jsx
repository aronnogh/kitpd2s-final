import React from 'react'
import { BiMap } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <div className="mx-auto w-[100vw] md:w-5/6 p-4 md:p-6 bg-[#e0e4d5] rounded-3xl border-2 border-black">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        <div className="flex-1">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-baseline gap-4">
              <label className="text-xl font-bold w-full sm:w-24">Name:</label>
              <input 
                type="text"  required
                placeholder="Put your name here..." 
                className="flex-1 bg-transparent border-b-2 border-black focus:outline-none p-1 text-gray-600"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-baseline gap-4">
              <label className="text-xl font-bold w-full sm:w-24">Mail ID:</label>
              <input 
                type="email"  required
                placeholder="Put your mail id here..." 
                className="flex-1 bg-transparent border-b-2 border-black focus:outline-none p-1 text-gray-600"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-baseline gap-4">
              <label className="text-xl font-bold w-full sm:w-24">Subject:</label>
              <input 
                type="text" required 
                placeholder="Put your message subject here..." 
                className="flex-1 bg-transparent border-b-2 border-black focus:outline-none p-1 text-gray-600"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-baseline gap-4">
              <label className="text-xl font-bold w-full sm:w-24">Message:</label>
              <textarea
                className="flex-1 bg-transparent border-b-2 border-black focus:outline-none p-1 text-gray-600"
                placeholder="Put your message here..."  required
                rows={8}
                ></textarea>
            </div>

            <button type='submit' className="relative inline-block text-lg group float-end mt-10">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Send Us!</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-64 bg-black rounded-2xl p-4 text-white space-y-4">
          <a target='_blank' href='https://www.google.com/maps?sca_esv=e67db641c1c92d57&sxsrf=ADLYWII2xZAgNXu4DluzMO7WvlnCjlmQ4A:1737051498798&iflsig=AL9hbdgAAAAAZ4lbeoRDCZJlSwnzFi5SBpWKwSWAB9Pi&gs_lp=Egdnd3Mtd2l6IgljYW1wdXMgOCwqAggAMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBxAAGIAEGAoyBRAAGIAESItYUABYgU9wAngAkAEAmAHyAaAB2BOqAQYwLjE4LjG4AQHIAQD4AQGYAhWgAoQUwgIKECMYgAQYJxiKBcICBBAjGCfCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgILEC4YgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICBRAuGIAEwgIOEC4YgAQYsQMYgwEYigXCAgsQLhiABBjRAxjHAcICCBAAGIAEGLEDwgIIEC4YgAQYsQPCAgQQABgewgIGEAAYBRgewgIIEAAYgAQYogTCAg0QABiABBixAxiDARgNwgIJEAAYgAQYChgNwgIHEAAYgAQYDcICCBAAGAUYDRgewgILEAAYgAQYhgMYigXCAgYQABgNGB7CAggQABgKGA0YHsICChAuGIAEGCcYigXCAg4QLhiABBixAxjRAxjHAcICBBAAGAPCAgsQLhiABBixAxjUAsICDhAuGIAEGMcBGI4FGK8BwgIIEC4YgAQY5QTCAgYQABgWGB6YAwCSBwYyLjE4LjGgB5rpAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVl5bMEXCRk6MQC5ssw3Xh35&daddr=9R29%2BGQR,+KIIT+Science+College+Rd,+Chandaka+Industrial+Estate,+K+I+I+T+University,+Patia,+Bhubaneswar,+Odisha+751024' className="w-full bg-[#e0e4d5] text-black rounded-lg p-2 flex items-center gap-2 font-semibold hover:scale-105">
            <BiMap size={20} /> Our Location on map
          </a>

          <div className="border-b border-white/20" />

          <a target='_blank' href='https://www.facebook.com/profile.php?id=61571508680486' className="w-full bg-[#e0e4d5] text-black rounded-lg p-2 flex items-center gap-2 font-semibold hover:scale-105">
            <FaFacebook size={20} /> Visit our FB page
          </a>

          <a target='_blank' href='https://www.instagram.com/kitpd2s_kiit' className="w-full bg-[#e0e4d5] text-black rounded-lg p-2 flex items-center gap-2 font-semibold hover:scale-105">
            <BsInstagram size={20} /> Visit our instagram
          </a>

          <div className="mt-auto pt-8">
            <div className="bg-[#e0e4d5] rounded-lg p-4 text-black space-y-2">
              <p className="text-xs">We build, we create the beauty of Mechanical.</p>
              <p className="text-xs">We formed not only society but also a family.</p>
              <div className="border-t border-black/20 mt-2 pt-2">
                <p className="text-xs text-center">The Society from Mechanical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs