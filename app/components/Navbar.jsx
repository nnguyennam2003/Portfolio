'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function Navbar({ isDarkMode, setIsDarkMode }) {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])

    return (
        <>
            {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] duration-500 dark:hidden'>
                <Image src={assets.header_bg_color} className='w-full' alt='bg' />
            </div> */}

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white/50 backdrop-blur-lg dark:bg-darkTheme dark:shadow-xl dark:shadow-[#17153B]' : ''}`}>
                <a href="#top" className='mr-20'>
                    <h1 className='text-2xl font-bold'>PORTFOLIO<span></span></h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:border-1 dark:bg-transparent"}`}>
                    <li>
                        <a href="#home" className='font-ovo hover:underline'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='font-ovo hover:underline'>About Me</a>
                    </li>
                    <li>
                        <a href="#services" className='font-ovo hover:underline'>Service</a>
                    </li>
                    <li>
                        <a href="#work" className='font-ovo hover:underline'>My Work</a>
                    </li>
                    <li>
                        <a href="#contact" className='font-ovo hover:underline'>Contact</a>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>

                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer' />
                    </button>

                    <a href="#contact" className='font-ovo hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white'>Contact <Image src={assets.arrow_icon} className='w-3' alt='arrow' /></a>
                    <button className='block md:hidden ml-3'>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu' className='w-6' onClick={openMenu} />
                    </button>
                </div>

                {/* Mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 translate-x-64 dark:bg-darkButton'>
                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li>
                        <a href="#home" className='font-ovo' onClick={closeMenu}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='font-ovo' onClick={closeMenu}>About Me</a>
                    </li>
                    <li>
                        <a href="#services" className='font-ovo' onClick={closeMenu}>Service</a>
                    </li>
                    <li>
                        <a href="#work" className='font-ovo' onClick={closeMenu}>My Work</a>
                    </li>
                    <li>
                        <a href="#contact" className='font-ovo' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
