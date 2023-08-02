import React from 'react'
import DashboardVector from '../../Assets/DashboardVector.svg'

const Header = () => {
  return (
    <div className='text-white w-full'>
      <div className='flex flex-col m-10 w-full items-start justify-center md:items-center  md:text-center h-[50%]'>
        <h1 className='text-4xl md:text-6xl font-semibold'>All-In-One <br></br> Dashboard View</h1>
        <p className='mt-2 font-light'>We provide a complete dashboard to <br></br>adjust your campaigns in just one canvas!</p>
        <button className='mt-8 bg-lime-300 py-3 px-5 text-[#00111C] transition ease-in-out delay-150 hover:-translate-y-1'>Discover Now</button>
      </div>
    </div>
  )
}

export default Header