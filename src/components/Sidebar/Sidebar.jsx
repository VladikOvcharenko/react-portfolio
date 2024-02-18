import { useState } from 'react'
import { motion } from 'framer-motion'

import Links from './Links/Links'
import ToggleBtn from './ToggleBtn/ToggleBtn'

import './sidebar.scss'

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
      clipPath: 'circle(20px at 35px 35px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const closeSidebar = () => {
    setOpen(false)
  }
  return (
    <motion.div className="sidebar flex" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links setClose={closeSidebar} />
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
