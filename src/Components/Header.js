"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000);
  };

  return (
    <header className="w-full bg-black text-white z-50 fixed pt-8 pb-4 px-8 left-0 right-0 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Necrozma Labs
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 ml-6">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-gray-400 focus:outline-none flex items-center gap-1">
            Projects <FiChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute bg-black text-white mt-2 rounded shadow-lg py-2 z-50 w-40">
              <Link href="/Nfuse" className="block px-4 py-2 hover:bg-gray-700">
                Nfuse
              </Link>
              <Link
                href="/openresearchlaboratory"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Open Research Laboratory
              </Link>
              <Link href="/BuildY" className="block px-4 py-2 hover:bg-gray-700">
                BuildY
              </Link>
              <Link href="/ViewAI" className="block px-4 py-2 hover:bg-gray-700">
                ViewAI
              </Link>
            </div>
          )}
        </div>
        <Link href="/About" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/Updates" className="hover:text-gray-400">
          Updates
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
<button
  className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 transition"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
</button>

        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black text-white px-6 py-4 flex flex-col gap-2 z-50">
            {/* Projects with Expand */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-gray-400 focus:outline-none w-full text-left flex items-center justify-between"
              >
                Projects
                {dropdownOpen ? (
                  <FiChevronUp size={18} />
                ) : (
                  <FiChevronDown size={18} />
                )}
              </button>
              {dropdownOpen && (
                <div className="pl-4 mt-2">
                  <Link
                    href="/Nfuse"
                    className="block py-1"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    Nfuse
                  </Link>
                  <Link
                    href="/openresearchlaboratory"
                    className="block py-1"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    Open Research Laboratory
                  </Link>
                  <Link
                    href="/BuildY"
                    className="block py-1"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    BuildY
                  </Link>
                  <Link
                    href="/ViewAI"
                    className="block py-1"
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    ViewAI
                  </Link>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              href="/About"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/Updates"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Updates
            </Link>
          </div>
        )}
      </div>

      {/* Social Icons (Desktop Only) */}
      <div className="hidden md:flex gap-4 items-center">
        <a
          href="https://www.linkedin.com/company/necrozmalabs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://x.com/Necrozmalabs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </header>
  );
};

export default Header;
