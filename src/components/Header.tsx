import menuIcon from '../assets/images/icon-menu.svg'
import menuClose from '../assets/images/icon-close.svg'
import menuCart from '../assets/images/icon-cart.svg'
import profileIcon from '../assets/images/image-avatar.png'
import logo from "../assets/images/logo.svg"
import { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    function Menu() {
        if(openMenu) {
            return (
                <AnimatePresence>
                    <motion.div 
                    initial={{x: '100vw'}}
                    animate={{x: '0'}}
                    transition={{duration: 0.8}}
                    onClick={() => setOpenMenu(false)}
                    className='absolute top-0 left-0 w-full h-full bg-black opacity-60'/>


                    <motion.div
                    initial={{x:'-16rem'}}
                    animate={{x:'0'}}
                    transition={{type: 'just'}}
                    exit={{x:'-16rem'}}
                    aria-hidden='true'
                    className='absolute bg-white top-0 left-0 h-full w-64 px-6 py-5 space-y-10 z-0'>
                        <button type='button' aria-label='Press here to close the menu' className='mb-3' onClick={() => setOpenMenu(false)}>
                            <img src={menuClose} alt="Menu close" />
                        </button>
                        <motion.ul
                        className='space-y-4'>
                            <motion.li initial={{y:'2rem', opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.3}} className='font-bold font-Kumbh text-lg'>
                                <button>Collections</button>
                            </motion.li>
                            <motion.li initial={{y:'2rem', opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.4}} className='font-bold font-Kumbh text-lg'>
                                <button>Men</button>
                            </motion.li>
                            <motion.li initial={{y:'2rem', opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.5}} className='font-bold font-Kumbh text-lg'>
                                <button>Women</button>
                            </motion.li>
                            <motion.li initial={{y:'2rem', opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.6}} className='font-bold font-Kumbh text-lg'>
                                <button>About</button>
                            </motion.li>
                            <motion.li initial={{y:'2rem', opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.7}} className='font-bold font-Kumbh text-lg'>
                                <button>Contact</button>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </AnimatePresence>
            )
        }
    } 

    return (
        <motion.header
        initial={{y: '-4.25rem'}}
        animate={{y: 0}}
        transition={{type:'spring', stiffness: 90, damping: 20}}
        className='flex justify-between p-6 py-5 pb-6'>
            <div className='flex items-end space-x-4 pb-1'>
                <button type='button' aria-label='Press here to open the menu' onClick={() => setOpenMenu(true)}>
                    <img src={menuIcon} alt="Menu"/>
                </button>
                <img src={logo} alt=""/>
            </div>

            <div className='flex items-end space-x-6'>
                <button type='button' aria-label='Press here to see your shopping list'>
                    <img src={menuCart} alt="shopping cart"/>
                </button>
                <img src={profileIcon} alt="" className='w-6'></img>
            </div>

            <Menu></Menu>
        </motion.header>
    )
}