import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

// import local files
import logo from '../../images/logo.png';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between item-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {['Market', 'Exchange', 'Tutorials', 'Wallet'].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {isOpen ? (
          <AiOutlineClose
            className="text-white md:hidden cursor-pointer"
            fontSize={28}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <HiMenuAlt4
            className="text-white md:hidden cursor-pointer"
            fontSize={28}
            onClick={() => setIsOpen(true)}
          />
        )}

        {isOpen && (
          <ul 
          className="z-10 fixed top-0 -right-2 p-3 ">
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                onClick={() => setIsOpen(false)}
                className="text-white md:hidden cursor-pointer"
                fontSize={28}
              />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallet'].map(
              (item, index) => (
                <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
              ),
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
