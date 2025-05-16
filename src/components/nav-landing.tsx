'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";

export const NavComponent = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/landing-page", active: pathName == '/landing-page' ? true : false },
    { name: "What we are building", href: "/landing-page/what-we-are-building", active: pathName == '/landing-page/what-we-are-building' ? true : false },
    { name: "Reach Out", href: "mailto:gyauelvis@ieee.org", active: false },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex sticky top-0 items-center justify-center w-full py-6 md:py-8 z-50">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-6 py-4">
        <Link href="/" className="text-2xl font-mono font-bold capitalize flex items-center gap-2 group">
          <span className="size-3 rounded-full bg-yellow-400 block animate-pulse group-hover:animate-ping transition-all duration-300"></span>
          <span className="bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">carsure</span>
        </Link>
        <div className="hidden md:flex w-full max-w-sm border border-gray-400/50 dark:border-gray-800/60 items-center bg-gray-100 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-900/80 transition-all duration-300 rounded-full justify-center h-12 backdrop-blur-lg shadow-xl shadow-black/10">
          <ul className="flex items-center gap-8 font-mono">
            {
              menu.map((nav, index) => (
                <li key={index}>
                  <Link href={nav.href} className={`dark:text-gray-300 capitalize dark:hover:text-white transition-colors duration-300 text-sm relative group ${nav.active ? 'font-bold' : ''}`}>
                    {nav.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <button
          className="md:hidden text-gray-400 dark:hover:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        
        <Link href="/early-access" className="hidden md:flex bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer font-mono gap-2 flex-row items-center capitalize px-5 py-2.5 rounded-full text-gray-900 font-bold text-sm hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
          <span>Join Waitlist</span>
        </Link>
      </nav>

      
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 dark:bg-gray-900/90 backdrop-blur-sm z-40 flex flex-col transition-all duration-300">
          <div className="flex flex-col h-full w-full px-4 pt-24 pb-8">
            <ul className="flex flex-col space-y-6 items-center font-mono">
              {menu.map((nav, index) => (
                <li key={index} className="w-full">
                  <Link
                    href={nav.href}
                    className={`dark:text-gray-200 capitalize dark:hover:text-white transition-colors duration-300 text-lg relative flex justify-center py-2 ${nav.active ? 'font-bold' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {nav.name}
                    {nav.active && <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-yellow-400"></span>}
                  </Link>
                </li>
              ))}
              <li className="w-full mt-6">
                <Link
                  href="/landing-page/early-access"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer font-mono gap-2 flex flex-row items-center justify-center capitalize px-5 py-3 rounded-full text-gray-900 font-bold text-base hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Join Waitlist</span>
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-gray-400 hover:text-muted-foreground dark:hover:text-white">
            <X className="size-5 absolute top-10 right-5"/> 
          </button>
        </div>
      )}
    </header>
  );
}