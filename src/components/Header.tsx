import menuIcon from '../assets/images/icon-menu.svg'
import menuClose from '../assets/images/icon-close.svg'
import menuCart from '../assets/images/icon-cart.svg'
import profileIcon from '../assets/images/image-avatar.png'
import logo from "../assets/images/logo.svg"
import { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion"

const tabs = [
    { id: "collections", label: "Collections"},
    { id: "men", label: "Men"},
    { id: "women", label: "Women"},
    { id: "about", label: "About"},
    { id: "contact", label: "Contact"},
]

export default function Header({amountOfProduct}: {amountOfProduct: number}) {
    const [openMenu, setOpenMenu] = useState(false)
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    const openCart = () => {
        window.alert(amountOfProduct)
    }
 
    return (
        <motion.header
        initial={{y: '-6rem'}}
        animate={{y: 0}}
        transition={{type:'just', duration: 0.6, delay: 0.1}}
        className='flex justify-between p-6 py-5 pb-6 lg:border-b-2 lg:border-gray-200 lg:p-0 lg:h-28 lg:items-center'>
            <div className='flex items-end space-x-4 pb-1 lg:p-0 lg:h-full lg:items-center'>
                <button 
                type='button' 
                aria-label='Press here to open the menu' 
                onClick={() => setOpenMenu(true)}
                className='lg:hidden'>
                    <img src={menuIcon} alt="Menu"/>
                </button>
                <img src={logo} alt=""/>

                <nav className='hidden lg:flex lg:space-x-1 lg:pl-8 font-Kumbh text-neutral-Dark-grayish-blue h-full'>
                    {tabs.map((tab) => (
                        <button
                        key={tab.id}
                        type='button'
                        aria-selected={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${activeTab === tab.id ? "" : "hover:opacity-60"} relative px-3 py-1 font-Kumbh`}
                        >
                            {activeTab === tab.id && (
                            <motion.div layoutId='active' className=' border-b-4 border-primary-Orange absolute inset-0'/>)}
                            <span className='relative z-10'>{tab.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            

            <div className='flex items-end space-x-6 lg:items-center lg:space-x-12 pr-1'>
                <button 
                type='button' 
                aria-label='Press here to see your shopping list'
                onClick={() => openCart()}>
                    <img src={menuCart} alt="" role='presentation'/>
                </button>
                <img src={profileIcon} alt="profile" className='w-6 lg:w-12'></img>
            </div>

            <AnimatePresence>
                {openMenu &&
                <> 
                    <motion.div
                    initial={{x: '100vw'}}
                    animate={{x: '0'}}
                    transition={{type: 'just'}}
                    exit={{x: '100vw'}}
                    onClick={() => setOpenMenu(false)}
                    className='absolute top-0 left-0 w-full h-full bg-black opacity-60 z-40'/>

                    <motion.nav
                    initial={{x:'-16rem'}}
                    animate={{x:'0'}}
                    transition={{type: 'just'}}
                    exit={{x:'-16rem'}}
                    aria-hidden='true'
                    className='absolute bg-white top-0 left-0 h-full w-64 px-6 py-5 space-y-10 z-50'>
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
                    </motion.nav>
                </>
                }
            </AnimatePresence>

        </motion.header>
    )
}