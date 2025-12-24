'use client'

import Link from 'next/link';
import { useState } from 'react'
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* LARGE SCREENS */}
            <div className='hidden lg:flex'>
                <Link href='/' className='px-4 text-xl text-white font-semibold hover:text-[#3EA6FF] duration-300 ease-in-out'>Home</Link>
                <Link href='#projects' className='px-4 text-xl text-white font-semibold hover:text-[#3EA6FF] duration-300 ease-in-out'>Projects</Link>
                <Link href='#contact' className='px-4 text-xl text-white font-semibold hover:text-[#3EA6FF] duration-300 ease-in-out'>Contact</Link>
                <Link href='/bts' className='px-4 text-xl text-white font-semibold hover:text-[#3EA6FF] duration-300 ease-in-out'>BTS</Link>
            </div>
            {/* SMALL SCREENS */}
            <div className='w-10 h-10  flex flex-col justify-around cursor-pointer lg:hidden' onClick={() => setIsOpen((prev) => !prev)}>
                <span className={`block bg-white w-full h-1`}></span>
                <span className={`block bg-white ${!isOpen ? 'w-full' : 'w-2/3'} self-end h-1 duration-300 ease-in-out`}></span>
                <span className={`block bg-white ${!isOpen ? 'w-full' : 'w-1/2'} self-end h-1 duration-300 ease-in-out`}></span>
            </div>
            {isOpen && (
                <div className='h-max w-full bg-[#1A1A1A] absolute top-20 right-0 flex flex-col items-center text-white text-lg font-semibold lg:hidden'>
                    <Link href='/' onClick={() => setIsOpen((prev) => !prev)}><p className='p-4'>Home</p></Link>
                    <Link href='#projects' onClick={() => setIsOpen((prev) => !prev)}><p className='p-4'>Projects</p></Link>
                    <Link href='#contact' onClick={() => setIsOpen((prev) => !prev)}><p className='p-4'>Contact</p></Link>
                    <Link href='/bts' onClick={() => setIsOpen((prev) => !prev)}><p className='p-4'>BTS</p></Link>
                </div>
            )}
        </div>
    )
}

export default Menu