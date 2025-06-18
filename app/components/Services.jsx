import { serviceData } from '@/assets/assets'
import { Monitor, Server, Layers, Palette } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react"

const iconMap = {
    Monitor,
    Server,
    Layers,
    Palette,
};

export default function Services() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-ovo'>What I offer</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-ovo'>My Services</motion.h2>
            <motion.p initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                As a dedicated web developer, I offer a range of services from frontend 
                and backend development to fullstack solutions and creative web design. 
                My goal is to deliver high-quality, efficient, and visually appealing digital products tailored to your needs.
            </motion.p>

            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='grid grid-cols-services gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => {
                    const LucideIcon = iconMap[icon];
                    return (
                        <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover duration-500 hover:-translate-y-1 dark:hover:bg-darkButton dark:hover:shadow-lightHover'>
                            <div className='w-10 h-10 mb-2 flex items-center justify-center'>
                                {LucideIcon && <LucideIcon size={40} />}
                            </div>
                            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm leading-5 dark:text-white'>{description}</p>
                        </div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}
