import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className=''>
      <div className='max-w-[420px] text-white '>
        <p className='font-semibold mb-2 text-2xl'>About Me</p>
        <p className='text-md text-[#A8A8A8]'>I am a sound-focused professional specializing in production sound
        mixing and audio post-production for film, television, and digital
        content. From on-set recording to final mix, I treat sound as a
        storytelling tool, shaping emotion, rhythm, and realism with precision
        and clarity. I work closely with directors, producers, and editors to
        ensure every detail serves the narrative. My goal is clean, expressive,
        cinematic sound that translates seamlessly across platforms and
        cultures.</p>
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
