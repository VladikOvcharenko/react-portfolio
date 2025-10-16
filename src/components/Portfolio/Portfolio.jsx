import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import projects from '../../data/data.json';

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <section>
      <div className="portfolio-container flex">
        <div className="portfolio-wrapper flex">
          <div className="portfolio-img" ref={ref}>
            <img
              src={require(`../../img${item.img}`)}
              alt={item.title}
              loading="lazy"
            />
          </div>
          <motion.div className="portfolio-text" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.tech}</p>
            <p>{item.task}</p>
            <a href={item.link}>link to</a>
            {/* <a href={item.gitHubLink}>GitHub</a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio-progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="portfolio-progress__bar"
        ></motion.div>
      </div>

      {projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
