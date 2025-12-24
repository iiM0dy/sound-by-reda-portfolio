import Image from 'next/image'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#1A1A1A] sticky top-0 z-50' id='home'>
        <div className='h-full flex items-center justify-between'>
        <Link href='/'><Image src='/logo.png' alt='Logo' width={80} height={80} /></Link>
        <Menu/>
        </div>
    </div>
  )
}

export default Navbar