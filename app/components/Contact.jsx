'use client'
import React, { useState } from 'react'
import { Facebook, Github, Instagram, Linkedin, LoaderCircle, MoveRight } from 'lucide-react'
import { motion } from "motion/react"
import toast from 'react-hot-toast';

export default function Contact() {
    const [isSending, setIsSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "c724dfa7-0af5-4487-bd61-776a497a9fc1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setIsSending(false);
            toast.success('Message sent successfully!');
            event.target.reset();
        } else {
            console.log("Error", data);
            setIsSending(false);
            toast.error(data.message);
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-ovo'>Connect with me</motion.h4>
            <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-center text-5xl font-ovo'>Get in touch</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Feel free to reach out if you have any questions, want to collaborate, or just want to connect. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>

            <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='flex items-center justify-center gap-8'>
                <li><a href="https://github.com/nnguyennam2003" target='_blank'><Github /></a></li>
                <li><a href="https://www.linkedin.com/in/namnguyen2003/" target='_blank'><Linkedin /></a></li>
                <li><a href="https://www.facebook.com/nmnam2003" target='_blank'><Facebook /></a></li>
                <li><a href="https://www.instagram.com/binn_11.11/" target='_blank'><Instagram /></a></li>
            </motion.ul>

            <motion.form onSubmit={onSubmit} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='max-w-2xl mx-auto'>
                <div className='flex flex-col sm:flex-row gap-6 mt-10 mb-8'>
                    <input type="text" name='name' placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] placeholder:text-gray-500 border-gray-400 rounded-md bg-white dark:bg-darkButton dark:placeholder:text-gray-200' />
                    <input type="email" name='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] placeholder:text-gray-500 border-gray-400 rounded-md bg-white dark:bg-darkButton dark:placeholder:text-gray-200' />
                </div>
                <textarea rows={6} name='message' placeholder='Enter your message' required className='w-full p-3 outline-none border-[0.5px] placeholder:text-gray-500 border-gray-400 rounded-md bg-white dark:bg-darkButton dark:placeholder:text-gray-200'></textarea>
                <button type='submit' className='mt-3 py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto duration-500 dark:bg-darkButton dark:hover:bg-darkHover cursor-pointer disabled:opacity-65 disabled:cursor-not-allowed' disabled={isSending}>Submit now {isSending ? <LoaderCircle className='w-6 animate-spin' /> : <MoveRight className='w-6' />}</button>
            </motion.form>
        </motion.div>
    )
}
