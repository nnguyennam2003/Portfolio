import { assets, workData } from '@/assets/assets'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export default function Work() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-ovo'>My Portfolio</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-ovo'>My Projects</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Here are some of the projects I have worked on, showcasing my skills in web development, UI/UX design, and building modern, responsive applications. Each project reflects my commitment to quality and creativity.
            </motion.p>

            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='grid grid-cols-services my-10 gap-5'>
                {workData.map((project, index) => (
                    <div key={index}>
                        <div className='w-full relative group'>
                            <Image src={project.bgImage} alt={project.title} />

                            <div className='absolute bottom-5 rounded-lg bg-white w-10/12 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 dark:bg-darkButton'>
                                <div>
                                    <h2 className='font-semibold'>
                                        {project.title}
                                    </h2>
                                    <p className='text-sm text-gray-700 dark:text-white'>
                                        {project.description}
                                    </p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt={project.title} className='w-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:bg-darkButton dark:text-white dark:border-none dark:hover:bg-darkHover'>
                Show more <MoveRight className='w-6'/>
            </motion.a>
        </motion.div >
    )
}
