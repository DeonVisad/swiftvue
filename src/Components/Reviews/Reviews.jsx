import React from 'react'

import {AiFillStar} from 'react-icons/ai'

const Reviews = () => {
  const hoverEffect = 'transition ease-in-out delay-050 hover:-translate-y-1';
  return (
    <div className='w-full h-screen flex justify-center items-start '>
      <div className='w-[75vw] h-[50vh] flex flex-col justify-center items-center bg-gray-800'>
        <h2 className='text-center text-white text-3xl m-10 w-full '>"I've never experienced analytics as complete as SwiftVue provides"</h2>
        <p className='flex text-xl justify-center text-lime-300'><AiFillStar className={hoverEffect} /><AiFillStar className={hoverEffect} /><AiFillStar className={hoverEffect} /><AiFillStar className={hoverEffect} /><AiFillStar className={hoverEffect} /></p>
        <p className='flex text-white font-medium justify-center mt-3'>Caleb Davidson</p>
        <p className='flex text-gray-100 font-light italic justify-center'>Head of Not Google</p>
      </div>
    </div>
  )
}

export default Reviews