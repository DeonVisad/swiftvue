import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {RxHamburgerMenu} from 'react-icons/rx';
import {GiHamburgerMenu} from 'react-icons/gi'




const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    console.log(open)
  }
  return (
    <>
    <div className='bg-white rounded-full h-[40vh] w-[40vh] border-white -top-20 -left-20 z-50 opacity-5 absolute blur-3xl'></div>
    <div className='flex w-full h-[8vh] fixed'>
      <div className='flex w-full items-center justify-between px-5 my-4 mx-4'>
        <span className='text-white text-xl font-bold'>SWIFT<span className='text-lime-300'>VUE</span></span>
        {/* MOBILE NAVIGATION */}
        <div className=''>
          <span className='text-white text-xl md:hidden z-30' onClick={handleOpen}>{!open ? <GiHamburgerMenu /> : <span>X</span>}</span>
        </div>
        <ul className={!open ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex gap-3 justify-center items-center bg-[#00111C] z-2'}>
          <span className='text-white text-3xl font-bold animate-pulse'>SWIFT<span className='text-lime-300'>VUE</span></span>
          <div className='flex-col flex gap-3'>
            <li><Link to='home' smooth={true}  className='text-white px-3 text-3xl cursor-pointer hover:text-lime-300' onClick={handleOpen}>HOME</Link></li>
            <li><Link to='reviews' smooth={true} offset={-200} className='text-white px-3 text-3xl cursor-pointer hover:text-lime-300' onClick={handleOpen}>REVIEWS</Link></li>
            <li><Link to='learn' smooth={true} offset={50} className='text-white px-3 text-3xl cursor-pointer hover:text-lime-300' onClick={handleOpen}>LEARN MORE</Link></li>
            <li><Link to='contact' smooth={true} offset={-200} className='text-white px-3 text-3xl cursor-pointer hover:text-lime-300' onClick={handleOpen}>CONTACT US</Link></li>
          </div>
        </ul>

        {/* DESKTOP NAVIGATION */}
        <div className='hidden md:flex'>
          <div className=''>
            <Link to='home' smooth={true} className='text-white px-3 cursor-pointer hover:text-lime-300'>HOME</Link>
            <Link to='reviews' smooth={true} offset={-200} className='text-white px-3 cursor-pointer hover:text-lime-300'>REVIEWS</Link>
            <Link to='learn' smooth={true} offset={50} className='text-white px-3 cursor-pointer hover:text-lime-300'>LEARN MORE</Link>
            <Link to='contact' smooth={true} offset={50} className='text-white px-3 cursor-pointer hover:text-lime-300'>CONTACT US</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar