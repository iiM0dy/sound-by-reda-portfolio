import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className=''>
      <div className='max-w-105 text-white '>
        <p className='font-semibold mb-2 text-2xl'>About Us</p>
        <p className='text-md text-[#A8A8A8]'>
          We are a sound-focused studio specializing in Production Sound Mixing and Audio Post-Production for film, television, and digital content.
          From on-set recording to the final mix, we approach sound as a storytelling tool, not just a technical requirement. Our work is built on precision, clarity, and a deep understanding of how sound shapes emotion, rhythm, and realism.
          We collaborate closely with directors, producers, and editors to ensure that every sonic detail serves the narrative—whether it’s dialogue, ambience, or sound design.
          Our goal is simple: clean, expressive, and cinematic sound that translates seamlessly across platforms and cultures.</p>
      </div>
      <div className='text-white mt-12 mb-6'>
        <p className='text-lg font-semibold'>Contacts</p>
        <Link href='mailto:' className='underline'>contact@soundbyreda.com</Link>
      </div>

      <div className='flex gap-4'>
        <Link target='_blank' href='https://www.instagram.com/soundbyreda/'><FaInstagram className='cursor-pointer text-3xl hover:text-[#A8A8A8] text-white ease-in-out duration-300' /></Link>
        <Link target='_blank' href='https://wa.me/201025811491'><FaWhatsapp className='cursor-pointer text-3xl hover:text-[#A8A8A8] text-white ease-in-out duration-300' /></Link>
        <Link target='_blank' href='mailto:contact@soundbyreda.com'><MdEmail className='cursor-pointer text-3xl hover:text-[#A8A8A8] text-white ease-in-out duration-300' /></Link>

      </div>
    </div>
  )
}

export default AboutSection
