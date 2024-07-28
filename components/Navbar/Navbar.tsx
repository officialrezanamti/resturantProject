'use client';


import { FaCartShopping } from 'react-icons/fa6';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';


export default function NavBar() {
  const pathname = usePathname()
  let [count , setCount] = useState(0)
  

  const cartHandler = () =>{
    setCount(count +=1)
  }

  
  return (
    <>
      <nav className="w-screen h-20 px-5 sticky top-0  bg-black bg-opacity-80 backdrop-blur-sm text-white flex justify-between md:px-[160px] items-center">
        <div className="flex lg:w-1/3 h-full items-center">
          <p className="bg-yellow-400 py-[5px] px-5 rounded-full mr-3 lg:mr-8 hover:bg-yellow-500 duration-300 cursor-pointer">
            Profile
          </p>
          <div className=' relative'>
            <p className=' absolute top-[-15px] right-[-10px] bg-yellow-400 text-[12px] px-[6px] rounded-full '>{count ? count : ''}</p>
            <FaCartShopping onClick={cartHandler}  className='text-2xl cursor-pointer relative top-[2px]' />

          </div>
        </div>
        <div className="lg:w-1/3 h-full  " >
          <ul className="flex justify-center items-center h-full text-lg">
            <Link href='/about-us'><li className={`lg:mr-16 mr-3 hover:text-yellow-500 duration-300 ${pathname =='/about-us' ? 'active' : ''}`}>About us</li></Link>
            <Link href='/contact-us'><li className={`lg:mr-16 mr-3 hover:text-yellow-500 duration-300 ${pathname =='/contact-us' ? 'active' : ''}`}>Contact us</li></Link>
            <Link href='/home'><li className={`lg:mr-16 mr-3 hover:text-yellow-500 duration-300 ${pathname =='/home' ? 'active' : ''}`}>Home</li></Link>
          </ul>
        </div>
        <div className=" w-1/3 h-full hidden lg:flex lg:justify-end lg:items-center ">
          <h3 className="  md:text-3xl bg-gradient-to-r font-semibold from-yellow-600 to-yellow-300 bg-clip-text text-transparent">Nerd Studio</h3>
        </div>
      </nav>
    </>
  );
}
