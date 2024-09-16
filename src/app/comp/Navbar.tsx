
import React from 'react'
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className='w-screen h-16 overflow-x-hidden'>
        <nav className='flex justify-between md:justify-between  h-full '>
            <div className='flex items-center pl-4 justify-start gap-16 '>
            <h1 className='text-2xl font-bold cursor-pointer'>Health<span className='text-blue-600'>Care</span></h1>
            <div className='hidden md:flex items-center pr-4 font-normal'>
            <div  className='p-3  text-lg hover:text-blue-500 cursor-pointer'>Home</div>
            <div  className='p-3  text-lg hover:text-blue-500 cursor-pointer'>About</div>
            <div  className='p-3  text-lg hover:text-blue-500 cursor-pointer'>Contact</div>
            </div>
            </div>
            
            <div className='hidden md:flex items-center justify-center mr-14 text-white'>
                <button type="button" className='py-2 px-5 border-none rounded-lg font-bold bg-blue-600 hover:bg-blue-800 transition-all duration-300'>Login</button>
            </div>
            <div className="flex items-center mr-4 text-white font-bold md:hidden"><CiMenuBurger/></div>
            
        </nav>
    </div>
  )
}

export default Navbar
