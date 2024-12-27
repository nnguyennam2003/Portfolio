import { useState } from 'react'
import { FadeLeft, FadeRight } from '../../utility/animation'
import { motion } from "framer-motion"
import { CiMenuFries } from "react-icons/ci";
import MenuMobile from './MenuMobile';

const navMenu = [
    {
        id: 1,
        title: 'Home',
        link: '#hero'
    },
    {
        id: 2,
        title: 'About',
        link: '#about'
    },
    {
        id: 3,
        title: 'Skill',
        link: '#skill'
    },
    {
        id: 4,
        title: 'Project',
        link: '#project'
    },
    {
        id: 5,
        title: 'Education',
        link: '#education'
    },
    {
        id: 6,
        title: 'Contact',
        link: '#contact'
    },

]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const clickOnMenuMobile = (e) => {
        e.stopPropagation()
    }
    const handleClickOutside = () => {
        setOpen(false);
    };

    return (
        <>
            <nav>
                <div className="nav-container">
                    {/* logo */}
                    <motion.div variants={FadeRight(0.3)} initial={"hidden"} animate={"visible"} className="nav-logo">
                        <p>Portfolio</p>
                    </motion.div>

                    {/* menu */}
                    <motion.div variants={FadeLeft(0.3)} initial={"hidden"} animate={"visible"} className="nav-menu">
                        <ul>
                            {navMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link}>{menu.title}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Hamburger */}
                    <div className="nav-menu-mobile" onClick={() => setOpen(!open)}>
                        <CiMenuFries />

                        {open && <div onClick={clickOnMenuMobile}><MenuMobile /></div>}
                    </div>
                </div>
            </nav >

            {open && <div className="overlay" onClick={handleClickOutside}></div>}
        </>
    )
}
