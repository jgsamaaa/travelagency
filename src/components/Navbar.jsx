import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="absolute z-10 flex items-center justify-between w-full h-20 px-4 text-white">
      <div>
        <h1 className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Destinations</a>
        </li>
        <li>
          <a href="/">Travel</a>
        </li>
        <li>
          <a href="/">View</a>
        </li>
        <li>
          <a href="/">Book</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} className="mr-5" />
        <BsPerson size={20} className="mr-5" />
      </div>

      {/* NOTE Hamburger Menu */}

      <div onClick={handleNav} className="z-10 md:hidden">
        {nav ? (
          <AiOutlineClose className="text-black " size={30} />
        ) : (
          <HiOutlineMenuAlt4 size={30} className="text-white text-2xl" />
        )}
      </div>
      {/* <div onCLick={handleNav} className=" md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div> */}

      {/* NOTE Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute top-0 left-0 flex flex-col w-full px-4 bg-gray-100/90 py-7 text-black'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b border-gray-600">
            <a href="/">Home</a>
          </li>
          <li className="border-b border-gray-600">
            <a href="/">Destinations</a>
          </li>
          <li className="border-b border-gray-600">
            <a href="/">Travel</a>
          </li>
          <li className="border-b border-gray-600">
            <a href="/">View</a>
          </li>
          <li className="border-b border-gray-600">
            <a href="/">Book</a>
          </li>
          <div className="flex flex-col">
            <button className="my-5">Seach</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}
