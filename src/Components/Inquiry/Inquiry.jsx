import React from 'react';
import {BsFillPlayFill} from 'react-icons/bs'

const Inquiry = () => {
  return (
    <div className='flex flex-col w-full h-screen text-white mt-8 ml-6 justify-center'>
        <div className='flex flex-col items-start'>
          <button className='bg-gray-800 py-1 px-5 flex items-center'><span className='text-lime-300'><BsFillPlayFill /></span> Demo Available</button>
          <h2 className='mt-4 text-3xl'>Start your campaign <br></br>of the future today</h2>
          <p className='mt-6 text-lg'>Want to change your marketing experience forever?<br></br>
           Just want more information? Sign up below!</p>

           <div className='flex mt-6'>
              <form>
                <input name='email' placeholder='Your email' className='px-3 py-2' required />
                <button type='submit' className='ml-4 px-3 py-2 bg-lime-300 text-black'>Sign up</button>
              </form>
           </div>
        </div>
        
    </div>
  )
}

export default Inquiry