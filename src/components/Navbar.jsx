import React, { useState } from 'react';
import { Link } from 'react-scroll';
import close from '../assets/close.svg';
import logo from '../assets/luxlogo.jpg';
import menu from '../assets/menu.svg';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false); 
  return (
    <nav className=' ml-[100px] w-[1200px] py-6 flex justify-between  items-center navbar'>
      <img src={logo} alt="bank" className='w-[100px] h-[64px] rounded-[10px]' />
      <p className='font-poppins font-semibold cursor-pointer sm:text-[25px] text-[18px] text-gold-light ml-[25px]'>Luxmee Beauty and Style</p>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] hover:text-white text-gold-light ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <Link to={nav.id} smooth={true} duration={500}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="" className='w-[28px] cursor-pointer h-[24px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-g bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[15px] text-gold-light ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                <Link to={nav.id} smooth={true} duration={500} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
