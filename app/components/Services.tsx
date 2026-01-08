import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div>
            <h1 className='text-white font-bold text-4xl text-center my-10 '>Our Services</h1>
            <div className='flex flex-col items-center justify-center lg:flex-row gap-6'>
                <div className='flex-col  w-full sm:w-120 h-135 bg-[#1A1A1A] rounded-2xl'>
                    <div className='relative w-full h-80'>
                        <Image src="/images/IMG-20251224-WA0.jpg" className='object-cover rounded-t-2xl' alt='' fill />
                    </div>
                    <div className="flex border-x-4 m-4 px-3  border-white items-center w-max h-6 my-5">
                        <h1 className="text-2xl text-white font-bold ">Location Sound Recording</h1>
                    </div>
                    <ul className='text-secondery-color ml-8 text-lg font-bold list-disc'>
                        <li>Professional-Grade Equipment</li>
                        <li>On-Set Expertise</li>
                        <li>Adaptability & Collaboration</li>
                    </ul>
                </div>
                <div className='flex-col w-full sm:w-120 h-135 bg-[#1A1A1A] rounded-2xl'>
                    <div className='relative w-full h-80'>
                        <Image src="/images/IMG-20251224-WA35.jpg" className='object-cover rounded-t-2xl' alt='' fill />
                    </div>
                    <div className="flex border-x-4 m-4 px-3  border-white items-center w-max h-6 my-5">
                        <h1 className="text-2xl text-white font-bold ">Audio Post-Production</h1>
                    </div>
                    <ul className='text-secondery-color ml-8 text-lg font-bold list-disc'>
                        <li>Comprehensive Editing & Mixing</li>
                        <li>Creative Sound Design</li>
                        <li>Quality Assurance</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services
