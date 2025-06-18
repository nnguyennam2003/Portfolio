import { serviceData } from '@/assets/assets'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export default function Services() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
         id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-ovo'>What I offer</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-ovo'>My Services</motion.h2>
            <motion.p initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla soluta 
                perferendis corrupti. Natus quis tempore provident molestias obcaecati, perferendis sed?
            </motion.p>

            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='grid grid-cols-services gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover duration-500 hover:-translate-y-1 dark:hover:bg-darkButton dark:hover:shadow-lightHover'>
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm leading-5 dark:text-white'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5 dark:text-white'>
                            Read more <MoveRight className='w-6'/>
                        </a>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
