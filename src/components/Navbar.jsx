import React from 'react'
import { useState } from 'react'
import close from '../assets/close.svg';
import logo from '../assets/luxlogo.jpg';
import menu from '../assets/menu.svg';
import {navLinks } from '../constants';


const NavBar = () => {
  const [toggle,setToggle] = useState(false); 
  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
<img src={logo} alt="bank" className='w-[100px] h-[64px] rounded-[10px]' />
<p  className='font-poppins font-semibold cursor-pointer sm:text-[25px] text-[18px] text-gold-light ml-[20px]'>Luxmee Beauty and style</p>
<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
{navLinks.map((nav,index)=>(
  <li key={nav.id}
  className={`font-poppins font-normal cursor-pointer text-[15px] text-gold-light ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}` }
  >
<a href={`#${nav.id}`}>
  {nav.title}
</a>
  </li>
))}

</ul>

<div className='sm:hidden flex flex-1 justify-end items-center '>
<img src={toggle?close:menu} alt=""  className='w-[28px] cursor-pointer  h-[24px] object-contain' onClick={()=> setToggle((prev)=>!prev)}/>

<div className={`${toggle ? 'flex ':'hidden' } p-g bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
<ul className='list-none flex flex-col justify-end items-center flex-1'>
{navLinks.map((nav,index)=>(
  <li key={nav.id}
  className={`font-poppins font-normal cursor-pointer text-[15px] text-gold-light ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}` }
  >
<a href={`#${nav.id}`}>
  {nav.title}
</a>
  </li>
))}

</ul>
</div>


</div>


    </nav>
  )
}

export default NavBar
