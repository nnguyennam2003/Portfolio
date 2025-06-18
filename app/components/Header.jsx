import { assets } from '@/assets/assets'
import { Download, MoveRight } from 'lucide-react'
import { motion } from "motion/react"

import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div id='home' className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32 h-32 object-cover' style={{ objectPosition: 'center 30%' }} />
            </motion.div>
            <motion.h3 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-center gap-2 text-xl md:text-2x; mb-3 font-ovo'>Hi! I'm Minh Nam <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>
            <motion.h1 initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
                Web developer <br /> base in Da Nang, Vietnam.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-ovo'>
                I am a frontend web developer with a passion for creating beautiful and functional user interfaces. I have experience in HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and improve my skills.
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} href="" className='px-10 py-3 border rounded-full  bg-black text-white flex items-center gap-2 dark:bg-darkButton dark:border-none'>contact me <MoveRight className='w-6' /></motion.a>
                <motion.a initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} href="/assets/public/sample-resume.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 dark:bg-transparent dark:border-white'>my resume <Download className='w-6 dark:text-white' /></motion.a>
            </div>
        </div>
    )
}
