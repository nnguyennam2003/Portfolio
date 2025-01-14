import ava from '../../assets/images/avatar.png'
import downloadIcon from '../../assets/images/download-icon.svg'
import { motion } from 'framer-motion'
import resume from '../../assets/pdf/FE_CV.pdf'

export default function About() {
    return (
        <section id='about'>
            <div className='about-container'>
                {/* about img */}
                <div className='about-img'>
                    <motion.img initial={{ scale: 0 }}
                        whileInView={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }} src={ava} alt="" />
                    <div className='background-ava'></div>
                </div>

                {/* about text */}
                <div className='about-text-wrapper'>
                    <div className="about-text-title">
                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0 }} className="title">
                            Who i am ? <br />
                            <span>Minh Nam</span>
                        </motion.div>
                        <div className="line-title"></div>
                        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0 }} className='sub-title'>
                            Frontend developer
                        </motion.div>
                    </div>
                    <motion.ul initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} className='about-list-info'>
                        <li><span>Name: </span> Nguyen Minh Nam</li>
                        <li><span>Date of birth: </span>November 11, 2003</li>
                        <li><span>Address:</span> Da Nang, Viet Nam</li>
                        <li><span>Email:</span> nguyenminhnam1739@gmail.com</li>
                        <li><span>Phone:</span> +0987654321</li>
                        <li><span>Language programming:</span> Javascript</li>
                    </motion.ul>
                    <motion.a initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} href={resume} className='btn-resume'
                        download="Resume-ReactJS-PDF">Download resume <img src={downloadIcon} alt="icon" />
                    </motion.a>
                </div>
            </div>
        </section>
    )
}
