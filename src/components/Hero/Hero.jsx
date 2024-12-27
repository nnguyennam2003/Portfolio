import hero from '../../assets/images/hero.png'
import Typed from 'typed.js';
import { motion } from "framer-motion"
import { FadeLeft, FadeRight } from '../../utility/animation';
import { useEffect, useRef } from 'react';

export default function Hero() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['VueJS', 'ReactJS'],
            typeSpeed: 100,
            backSpeed: 40,
            backDelay: 1300,
            loop: true,
            showCursor: false,
            autoInsertCss: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id='hero'>
            <div className='hero-container'>
                {/* Info */}
                <div className='hero-info'>
                    <motion.h1 variants={FadeRight(0.3)} initial={'hidden'} animate={'visible'}>Frontend Developer</motion.h1>
                    <motion.div variants={FadeRight(0.7)} initial={'hidden'} animate={'visible'} className='text-typing-effect' ref={el} />
                    <motion.h3 variants={FadeRight(0.3)} initial={'hidden'} animate={'visible'}>Hello, I&apos;m <span>Nguyen Minh Nam</span></motion.h3>
                    <motion.p variants={FadeRight(1)} initial={'hidden'} animate={'visible'} >
                        Welcome to my portfolio! I am a Frontend Developer passionate about creating and building beautiful, optimized and friendly
                        user interfaces, with experience working with modern technologies and frameworks, I always aim to bring smooth and
                        impressive user experiences.
                    </motion.p>
                </div>

                {/* hero-image */}
                <motion.div variants={FadeLeft(0.3)} initial={'hidden'} animate={'visible'} className='hero-image'>
                    <img src={hero} alt="" />
                </motion.div>
            </div>
        </section>
    )
}
