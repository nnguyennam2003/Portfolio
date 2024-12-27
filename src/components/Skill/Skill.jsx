import { motion } from 'framer-motion'

import redux_ic from '../../assets/icons/redux.svg'
import pinia_ic from '../../assets/icons/Pinialogo.svg'
import tailwind_ic from '../../assets/icons/tailwindcss.svg'
import sass_ic from '../../assets/icons/sass-logo.svg'
import styled_cpn_ic from '../../assets/icons/styled-component.webp'
import figma_ic from '../../assets/icons/figma.svg'
import xd_ic from '../../assets/icons/adobe-xd.svg'
import firebase_ic from '../../assets/icons/firebase.svg'
import mongodb_ic from '../../assets/icons/mongodb.svg'
import git_ic from '../../assets/icons/git.svg'
import github_ic from '../../assets/icons/github.svg'

import skills from '../../data/skills'


export default function Skill() {
  return (
    // initial={{width: '1px'}} whileInView={{width: '100px'}} transition={{ duration: 1, delay: 0}}
    <section id="skill">
      <div className='skill-container'>
        <h2>
          My Skills
        </h2>
        <div className='skill-wrapper'>
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-icon">
                <img src={skill.icon} alt="" />
              </div>
              <div className="skill-progress">
                <motion.div initial={{ width: '0%' }} whileInView={{ width: skill.progress }} transition={{ duration: 1, delay: 0 }} className='progress-real'></motion.div>
                <div className='info-skill'>
                  <span>{skill.name}</span>
                  <span>{skill.progress}</span>
                </div>
                <div className='progress-bg'></div>
              </div>
            </div>
          ))}
        </div>


        <div className="logo-marquee">
          <div className="logos">
            <img src={tailwind_ic} alt="Logo 1" />
            <img src={sass_ic} alt="Logo 4" />
            <img src={styled_cpn_ic} alt="Logo 4" />
            <img src={redux_ic} alt="Logo 2" />
            <img src={pinia_ic} alt="Logo 3" />
            <img src={git_ic} alt="Logo 4" />
            <img src={github_ic} alt="Logo 4" />
            <img src={firebase_ic} alt="Logo 4" />
            <img src={mongodb_ic} alt="Logo 4" />
            <img src={figma_ic} alt="Logo 4" />
            <img src={xd_ic} alt="Logo 4" />
          </div>
          <div className="logos">
            <img src={tailwind_ic} alt="Logo 1" />
            <img src={sass_ic} alt="Logo 4" />
            <img src={styled_cpn_ic} alt="Logo 4" />
            <img src={redux_ic} alt="Logo 2" />
            <img src={pinia_ic} alt="Logo 3" />
            <img src={git_ic} alt="Logo 4" />
            <img src={github_ic} alt="Logo 4" />
            <img src={firebase_ic} alt="Logo 4" />
            <img src={mongodb_ic} alt="Logo 4" />
            <img src={figma_ic} alt="Logo 4" />
            <img src={xd_ic} alt="Logo 4" />
          </div>
        </div>
      </div>
    </section>
  )
}
