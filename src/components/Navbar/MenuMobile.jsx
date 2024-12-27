import { AnimatePresence, motion } from 'framer-motion'

export default function MenuMobile() {
    return (

        <AnimatePresence mode="wait">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.2 }} className="menu-mobile">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Project</li>
                    <li>Education</li>
                    <li>Contact</li>
                </ul>
            </motion.div>
        </AnimatePresence>
    )
}
