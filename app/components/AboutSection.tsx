import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className=''>
      <div className='max-w-[420px] text-white '>
        <p className='font-semibold text-2xl'>About Me</p>
        <p className='text-md text-[#A8A8A8]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus laborum ipsam obcaecati dolor molestiae illo eum culpa animi, quisquam, explicabo facilis ducimus, vero quidem sunt tempora expedita quos? Amet.</p>
      </div>
      <div className='text-white mt-12 mb-6'>
        <p className='text-lg font-semibold'>Contacts</p>
        <Link href='mailto:' className='underline'>contact@soundbyreda.com</Link>
      </div>
      <div className='flex gap-4'>
        <Link href='https://www.instagram.com/soundbyreda/'><FaInstagram className='cursor-pointer text-3xl hover:text-[#A8A8A8] text-white ease-in-out duration-300' /></Link>
        <Link href='https://wa.me/201025811491'><FaWhatsapp className='cursor-pointer text-3xl hover:text-[#A8A8A8] text-white ease-in-out duration-300' /></Link>
        <Link href='mailto:contact@soundbyreda.com'><MdEmail className='cursor-pointer text-3xl hover:text-[#A8A8A8] text-white ease-in-out duration-300' /></Link>

      </div>
    </div>
  )
}

export default AboutSection