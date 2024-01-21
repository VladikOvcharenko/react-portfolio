import './hero.scss'
import { motion } from 'framer-motion'

import heroPhoto from './../../img/hero.png'
import scrollIcon from './../../img/scroll.png'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-100%',
    opacity: 1,
    transition: {
      duration: 35,
      repeat: Infinity,
      repeatType: 'mirror',
      staggerChildren: 0.1,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <motion.div
          className="hero-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Vlad Ovcharenko</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.div className="hero-btn">
            <motion.a variants={textVariants}>See the Latest Works</motion.a>
            <motion.a variants={textVariants}>Contact Me</motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollBtn"
            src={scrollIcon}
            alt=""
          />
        </motion.div>
        <motion.div
          className="hero-slideText"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          React JS Html Css
        </motion.div>
        <div className="hero-img">
          <img src={heroPhoto} alt="me" />
        </div>
      </div>
    </div>
  )
}

export default Hero
