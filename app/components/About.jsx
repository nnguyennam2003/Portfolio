import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export default function About({isDarkMode}) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-ovo'>About me</motion.h2>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='' className='rounded-3xl w-full h-[500px] object-cover' style={{ objectPosition: 'bottom' }} />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className='flex-1'>
                    <p className='mb-10 max-w-3xl font-ovo'>
                        Hi, I'm Nam, a passionate web developer with a strong background in building modern, responsive, and user-friendly websites and applications. 
                        I enjoy turning complex problems into simple, beautiful, and intuitive digital experiences. With experience in both frontend and backend technologies, I am always eager to learn new tools and deliver high-quality solutions that make a real impact.
                    </p>

                    <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className='grid grid-cols-1 mx-3 sm: sm:grid-cols-3 gap-6 max-w-3xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li  whileInView={{scale: 1.05 }}
                             key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkButton dark:hover:shadow-lightHover'>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }} className='my-6 text-gray-700 font-ovo dark:text-white'>
                        Tool and Database I use :
                    </motion.h4>
                    <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className='flex flex-wrap items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li key={index} title={tool.name} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkButton dark:hover:shadow-lightHover'>
                                <Image src={tool.icon} alt={tool.name} className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
