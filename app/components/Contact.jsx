'use client'
import React from 'react'
import { MoveRight } from 'lucide-react'
import { motion } from "motion/react"

export default function Contact() {
    // const [result, setResult] = useState('');

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     setResult("Sending....");
    //     const formData = new FormData(event.target);

    //     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    //     const response = await fetch("https://api.web3forms.com/submit", {
    //         method: "POST",
    //         body: formData
    //     });

    //     const data = await response.json();

    //     if (data.success) {
    //         setResult("Form Submitted Successfully");
    //         event.target.reset();
    //     } else {
    //         console.log("Error", data);
    //         setResult(data.message);
    //     }
    // }

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-ovo'>Connect with me</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-ovo'>Get in touch</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione
                minima in eaque voluptatum
                temporibus.
            </motion.p>

            <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='max-w-2xl mx-auto'>
                <div className='flex flex-col sm:flex-row gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] placeholder:text-gray-500 border-gray-400 rounded-md bg-white dark:bg-darkButton dark:placeholder:text-gray-200' />
                    <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] placeholder:text-gray-500 border-gray-400 rounded-md bg-white dark:bg-darkButton dark:placeholder:text-gray-200' />
                </div>
                <textarea rows={6} placeholder='Enter your message' required className='w-full p-3 outline-none border-[0.5px] placeholder:text-gray-500 border-gray-400 rounded-md bg-white dark:bg-darkButton dark:placeholder:text-gray-200'></textarea>
                <button type='submit' className='mt-3 py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto duration-500 dark:bg-darkButton dark:hover:bg-darkHover cursor-pointer'>Submit now <MoveRight className='w-6' /></button>
            </motion.form>
        </motion.div>
    )
}
