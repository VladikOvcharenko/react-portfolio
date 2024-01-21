import './services.scss'
import { motion } from 'framer-motion'
import { useRef } from 'react'

import peoplePhoto from './../../img/people.webp'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  const ref = useRef()

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={'animate'}
      // animate={isInView && 'animate'}
    >
      <motion.div className="services-text" variants={variants}>
        <p>
          I focus on helping your grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="services-container" variants={variants}>
        <div className="services-container__title">
          <img className="services-container__img" src={peoplePhoto} alt="" />
          <h1>
            <motion.span whileHover={{ color: 'orange' }}>Unique</motion.span>{' '}
            Ideas
          </h1>
        </div>
        <div className="services-container__title">
          <h1>
            <motion.span whileHover={{ color: 'orange' }}>For your</motion.span>{' '}
            Business
          </h1>
          <button>what i do?</button>
        </div>
      </motion.div>
      <motion.ul className="services-list list-reset" variants={variants}>
        <motion.li
          className="services-list__item"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            itaque sed necessitatibus. Sed reprehenderit veniam laboriosam
            aperiam quia voluptas inventore ratione vitae nemo delectus?
          </p>
          <button>Go</button>
        </motion.li>
        <motion.li
          className="services-list__item"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            itaque sed necessitatibus. Sed reprehenderit veniam laboriosam
            aperiam quia voluptas inventore ratione vitae nemo delectus?
          </p>
          <button>Go</button>
        </motion.li>
        <motion.li
          className="services-list__item"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            itaque sed necessitatibus. Sed reprehenderit veniam laboriosam
            aperiam quia voluptas inventore ratione vitae nemo delectus?
          </p>
          <button>Go</button>
        </motion.li>
        <motion.li
          className="services-list__item"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            itaque sed necessitatibus. Sed reprehenderit veniam laboriosam
            aperiam quia voluptas inventore ratione vitae nemo delectus?
          </p>
          <button>Go</button>
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}

export default Services
