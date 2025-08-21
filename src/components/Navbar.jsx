import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const navMenu = () => {
        return(
            <>
            <li><Link className='font-semibold ' href={"/"}>Home</Link></li>
       
            <li><Link className='font-semibold' href={"/products"}>Products</Link></li>
            
            </>
        )
    }
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navMenu()}
      </ul>
    </div>
    <Link href={"/"} className=" pb-2 gap-2 text-xl flex">
        <Image className='rounded-full' src={'/assets/logo.jpg'} width={48} height={40}/> 
        <p className='pt-4 font-bold'>Pro<span className='text-[#154D71]'>Manager</span></p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">


     {navMenu()}


    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline">LogIn</a>
  </div>
</div>
  )
}
