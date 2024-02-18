import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'
import { useRef } from 'react'

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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5469 12.638C12.3375 13.7944 11.7213 14.6466 11.2687 15.205C11.9205 15.6009 16.6293 18.4898 18.9828 20C19.2621 13.9086 20.444 7.46193 21 5C16.4379 6.15736 7.09914 10.0761 3 11.8909L8.0431 13.7944C9.55894 12.7925 13.3725 10.4133 16.5 8.91181"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/VladikOvcharenko">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7444 14C5.13962 13 5.64768 8.5 7.67987 7C7.27882 6.39155 6.66375 4 7.1718 3.00001C8.18792 3.5 9.55173 4.23944 10.2202 5C12.2524 4 15.3007 4 16.8249 5C17.226 4.18873 18.6968 3.42254 19.3652 3C19.9668 3.60845 19.5323 5.98592 19.3652 7C20.3678 9.19718 20.8894 12.5 15.3007 14C16.1273 14.6688 17.4571 16.2652 18.3819 18.0893C19.0373 19.3821 17.7844 20.5701 16.3571 20.3176C15.3606 20.1413 14.2545 20 13.2685 20C12.0745 20 10.494 20.2071 9.12617 20.4329C7.71155 20.6663 6.56735 19.4472 7.29296 18.2106C7.81974 17.3128 8.48393 16.4725 9.20408 16C8.95342 15.662 7.9605 14.6887 6.15574 15.5C3.89979 16.5141 2.60607 14.2676 3.10739 13"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a href="https://www.linkedin.com/in/vlad-ovcharenko/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.50143 6.90595C2.37528 5.7193 3.24155 3.95978 5.14733 4.0007C7.05312 4.04162 7.61619 6.12849 6.83655 7.68341C6.21284 8.92734 4.35326 9.34744 3.50143 9.402V20H9.17547V8.95189H12.9004V10.7523C15.4993 7.68341 21 8.62454 21 13.0029V20H17.1019V14.5169C17.1019 12.0208 15.9757 11.5093 14.698 12.0208C13.4202 12.5323 12.9004 13.453 12.9004 15.3352C12.9004 17.5612 12.9004 19.3726 12.9004 20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <a href="https://www.facebook.com/vlad.ovcharenko.3/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.89231 21V13.2538H7V9.94249H9.89231C9.89231 6.42419 9.89231 2.07805 17 3.17198V6.03983C13.9231 5.71462 13.6154 6.66071 13.6154 9.94249H17L16.3231 13.2538H13.6154V21"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
