import './links.scss'
import { motion } from 'framer-motion'

<<<<<<< Updated upstream
const Links = () => {
=======
const Links = ({ setClose }) => {
>>>>>>> Stashed changes
  const items = ['Homepage', 'Services', 'Portfolio', 'Contact']

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  }
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
<<<<<<< Updated upstream
=======
          onClick={setClose}
>>>>>>> Stashed changes
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
