import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import citicom from '../../img/citicom.jpg'
import poker from '../../img/pokermutch.jpg'
import xGen from '../../img/x-gen.jpg'

const items = [
  {
    id: 1,
    title: 'CitiCom',
    img: citicom,
    desc: 'In the project, I utilized HTML5, SCSS, and JavaScript as the core technology stack. Additionally, I incorporated Swiper slider, smooth-scroll functionality, and employed the Gulp project builder. For feedback purposes, the Telegram API was integrated.',
    link: 'https://vladikovcharenko.github.io/citicom/',
    gitHubLink: 'https://github.com/VladikOvcharenko/citicom',
  },
  {
    id: 2,
    title: 'Poker Match',
    img: poker,
    desc: 'In the project, I utilized HTML5, SCSS, and JavaScript as the core technology stack. Additionally, I incorporated Swiper slider and employed the Gulp project builder. For feedback purposes.',
    link: 'https://vladikovcharenko.github.io/poker/',
    gitHubLink: 'https://github.com/VladikOvcharenko/poker',
  },
  {
    id: 3,
    title: 'X-GEN',
    img: xGen,
    desc: 'In the project, I utilized HTML5, SCSS, employed the Gulp project builder.',
    link: 'https://vladikovcharenko.github.io/X-GEN/',
    gitHubLink: 'https://github.com/VladikOvcharenko/X-GEN',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
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
            <a href={item.gitHubLink}>GitHub</a>
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
