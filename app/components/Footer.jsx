import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className='mt-20'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>PORTFOLIO<span></span></h1>

                <div className='flex w-max items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-6' /> nguyenminhnam1739@gmail.com
                </div>
            </div>
            
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&copy; 2025 Nguyen Minh Nam. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a href="https://github.com/nnguyennam2003" target='_blank'>Github</a></li>
                    <li><a href="https://www.linkedin.com/in/namnguyen2003/" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://www.facebook.com/nmnam2003" target='_blank'>Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}
