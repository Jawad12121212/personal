import React, { useState } from 'react';
import Nav from '../components/Nav';
import { IoIosClose, IoIosMenu } from "react-icons/io";
import gsap from 'gsap';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu((prevMenu) => {
      const newMenuState = !prevMenu;
      let tl = gsap.timeline();

      if (newMenuState) {
        tl.to('.respo', {
          duration: 1,
          height: '80vh',
        });
        tl.to('.respo nav a', {
          top: '0%',
          // opacity: 0,
          stagger: 0.5,
          // duration: 0.5,
        });
      } else {
        tl.to('.respo nav a', {
          top: '100%',
          stagger: -0.5,
        });
        tl.to('.respo', {
          duration: 1,
          height: '0vh',
        });
      }

      return newMenuState;
    });
  };

  return (
    <header className='fixed top-0 left-0 z-[999] w-full flex flex-col px-[5vw] bg-zinc-100'>
      <div className="h-[10vh] w-[100%] flex justify-between items-center">
        <h1 className='text-[3vw] max-md:text-[30px] max-lg:text-[3vw]'>Personal</h1>
        <div className="max-lg:hidden">
          <Nav/>
        </div>
        <span onClick={handleClick} className='text-[3vw] max-md:text-[25px] max-lg:text-[3vw] lg:hidden'>
          {menu ? <IoIosClose /> : <IoIosMenu />}
        </span>
      </div>
      <div className="respo lg:hidden h-[0vh] w-full bg-zinc-100 overflow-hidden flex justify-center items-center">
        <Nav />
      </div>
    </header>
  );
};

export default Navbar;
