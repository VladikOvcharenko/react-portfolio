import { useState } from 'react'
<<<<<<< Updated upstream
import Links from './links/Links'
import './sidebar.scss'
import ToggleBtn from './toggleBtn/ToggleBtn'
import { motion } from 'framer-motion'

=======
import { motion } from 'framer-motion'

import Links from './links/Links'
import ToggleBtn from './toggleBtn/ToggleBtn'

import './sidebar.scss'

>>>>>>> Stashed changes
const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
<<<<<<< Updated upstream
      clipPath: 'circle(30px at 50px 50px)',
=======
      clipPath: 'circle(20px at 35px 35px)',
>>>>>>> Stashed changes
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }
<<<<<<< Updated upstream
  return (
    <motion.div className="sidebar flex" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links />
=======

  const closeSidebar = () => {
    setOpen(false)
  }
  return (
    <motion.div className="sidebar flex" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links setClose={closeSidebar} />
>>>>>>> Stashed changes
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
