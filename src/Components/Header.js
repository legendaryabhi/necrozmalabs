"use client"
import Link from "next/link";
import { FaBars, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-black text-white z-50 fixed pt-2 left-0 right-0 flex items-center justify-center md:justify-between">
      {/* Left Side: Hamburger Icon for Mobile */}
      <button
        onClick={toggleSidebar}
        className="absolute left-4 md:hidden text-white text-2xl"
      >
        <FaBars />
      </button>

      {/* Centered Title */}
      <Link href="/" className="text-2xl ml-8 my-4 font-bold">Necrozma Labs
      </Link>
      {/* Right Side: Social Icons (Hidden on Mobile) */}
      <div className="hidden md:flex gap-4 absolute right-8">
        <a
          href="https://www.linkedin.com/company/necrozmalabs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/Necrozmalabs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
