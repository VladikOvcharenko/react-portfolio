import './services.scss'
import { motion } from 'framer-motion'
import { useRef } from 'react'

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
    >
      <motion.div className="services-text" variants={variants}>
        <p>
          I focus on helping your grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="services-container" variants={variants}>
        <h1 className="services-container__title">my SERVICES</h1>
      </motion.div>
      <motion.ul className="services-list list-reset" variants={variants}>
        <li className="services-list__item">
          <h2>Responsive Website Development</h2>
          <p>
            I craft modern websites that are not only visually appealing but
            also seamlessly functional across various devices. My expertise in
            responsive web development ensures an excellent visual and
            functional experience on mobile devices, tablets, and desktops.
          </p>
          <a href="#Contact">Go</a>
        </li>
        <li className="services-list__item">
          <h2>Development with React</h2>
          <p>
            I utilize modern libraries and frameworks, with a focus on React, to
            create efficient and dynamic user interfaces. My specialization in
            React ensures rapid development and ease of maintenance for your
            projects.
          </p>
          <a href="#Contact">Go</a>
        </li>
        <li className="services-list__item">
          <h2>Optimization and Accessibility</h2>
          <p>
            My approach to web application development involves meticulous
            optimization of code and resources to achieve high performance.
            Additionally, I ensure the accessibility of websites for all users,
            including those with limited capabilities. My goal is to create web
            applications that are accessible and functional for everyone.
          </p>
          <a href="#Contact">Go</a>
        </li>
      </motion.ul>
    </motion.div>
  )
}

export default Services
