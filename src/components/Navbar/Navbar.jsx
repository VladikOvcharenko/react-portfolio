import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'
import { useRef } from 'react'

import telegramIcon from './../../img/telegram_icon.png'
import githubIcon from './../../img/github_icon.png'
import linkedinIcon from './../../img/linkedin_icon.png'
import facebookIcon from './../../img/facebook_icon.png'

const variants = {
  initial: {
    x: 200,
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const Navbar = () => {
  const ref = useRef()

  return (
    <div className="navbar">
      <Sidebar />
      <div className="navbar-wrapper">
        <ul className="navbar-socials">
          <motion.li
            variants={variants}
            initial="initial"
            ref={ref}
            animate={'animate'}
          >
            <a href="https://t.me/ovcharenko_vlad">
              <img src={telegramIcon} alt="telegram" />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/VladikOvcharenko">
              <img src={githubIcon} alt="github" />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a href="https://www.linkedin.com/in/vlad-ovcharenko/">
              <img src={linkedinIcon} alt="linkedin" />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <a href="https://www.facebook.com/vlad.ovcharenko.3/">
              <img src={facebookIcon} alt="facebook" />
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
