import React from 'react';
import homesvg from '../../asset/Icons/homesvg.svg'
import instagram from '../../asset/Icons/instagram.png'
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';

const Footer = () => {
  return (
    <>
      <footer className='flex border border-black'>
        <div className='flex flex-col'>
          <div className='flex border border-red-500 w-screen'>
            <div className='flex flex-col border border-orange-500 my-5 mx-2'><img className='w-20' src={homesvg} alt="" />
              Thoughtful choice for great agriculture experience
            </div>
            <div className='flex flex-col border border-sky-900 w-1/2 my-5 mx-2'>Get our best recommendations in your inbox<br />
              <span>
                <input className='border-2 w-48 m-2 text-white border-blue-500 px-2 py-1 focus:outline-0 rounded-2xl bg-blue-500 drop-shadow-lg hover:bg-indigo-500' placeholder='Search Items' type="email" name="email" id="" />
                <button type="submit" className='text-white drop-shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-xl p-2'>Subscribe</button>
              </span>
            </div>
            <div className='flex flex-col border border-violet-900 my-5 mx-2'>Follow Us<br />
              <span className='flex'>
                <img className='w-10 h-10' src={instagram} alt="instagram" />
                <img className='w-10 h-10' src={instagram} alt="instagram" />
                <img className='w-10 h-10' src={instagram} alt="instagram" />
              </span>
            </div>
            <div className='border flex items-center border-violet-900 my-5 mx-2'>
              <a href='tel:+919589518638' className='cursor-pointer' ><Chip icon={<MdPhone />} label="Call me" /></a>
            </div>
          </div>
          <div className='border text-center border-yellow-500'>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer