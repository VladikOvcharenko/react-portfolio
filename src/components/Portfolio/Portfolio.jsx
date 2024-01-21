import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    id: 1,
    title: 'react',
    img: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum ad nobis quaerat nulla, amet, minus sed voluptatem impedit quibusdam.',
    link: 'https://www.pexels.com/ru-ru/search/%D1%81%D0%BB%D0%BE%D0%BD/',
  },
  {
    id: 2,
    title: 'react',
    img: 'https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum ad nobis quaerat nulla, amet, minus sed voluptatem impedit quibusdam.',
    link: '',
  },
  {
    id: 3,
    title: 'react',
    img: 'https://images.pexels.com/photos/68550/thailand-elephant-sunset-nature-68550.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum ad nobis quaerat nulla, amet, minus sed voluptatem impedit quibusdam.',
    link: '',
  },
  {
    id: 4,
    title: 'react',
    img: 'https://images.pexels.com/photos/166277/pexels-photo-166277.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum ad nobis quaerat nulla, amet, minus sed voluptatem impedit quibusdam.',
    link: '',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250])

  return (
    <section>
      <div className="portfolio-container flex">
        <div className="portfolio-wrapper flex">
          <div className="portfolio-img" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="portfolio-text" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>See DEMO</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio-progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="portfolio-progress__bar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
