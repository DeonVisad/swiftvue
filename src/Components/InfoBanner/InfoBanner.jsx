import React from 'react';
import light from '../../Assets/light.jpg'

const InfoBanner = () => {
  const rangeVal = document.getElementById('rangeVal');
  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex flex-col w-full items-center'>
          <img className='h-[200px] md:h-[600px] w-full' src={light}/>
          <div className='w-[65vw] h-[40vh] md:h-[60vh] bg-gray-800 flex flex-col justify-center items-center'>
            <span className='w-[40vw] border-b-[1px] border-gray-600'></span>
            <p className='flex mt-3 text-white md:text-xl'>Powered by</p>
            <p className='flex text-end text-lime-300 md:text-xl'>Livable<br></br>Payments</p>
            <div className='flex flex-col m-3 h-[8vh] w-[50vw] bg-zinc-900 justify-center'>
              <label className='pb-1' for="rangeVal">Adjust Range</label>
              <input className='' id='rangeVal' name='rangeVal' type='range' min={0} max={100} step={10}/>
            </div>
          </div>
          
      </div>
    <div className='flex flex-col w-full h-screen mt-10 ml-6 md:items-center'>
      <h2 className='text-white text-2xl md:text-4xl'>Adjust anytime, <span className='text-lime-300'>anywhere!</span></h2>
      <br></br>
      <p className='text-white md:text-xl'>Our cutting-edge dashboard simplifies the complex world of marketing by offering a swift and seamless experience.</p>
      <br></br>
      <p className='text-white md:text-xl'>Our standout feature, allowing swift and effortless adjustment of marketing budgets within a user-friendly interface, underscores our commitment to providing unparalleled flexibility and control.</p>
      <div className='flex items-center'>
        <button className='mt-8 bg-lime-300 py-3 px-5 text-[#00111C] transition ease-in-out delay-150 hover:-translate-y-1'>Discover Now</button>
        <p className='pt-7 ml-5 text-lime-300 underline'>Check Demo</p>
      </div>
    </div>
    </div>
  )
}

export default InfoBanner