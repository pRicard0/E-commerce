import menuIcon from '../assets/images/icon-menu.svg'
import menuClose from '../assets/images/icon-close.svg'
import menuCart from '../assets/images/icon-cart.svg'
import profileIcon from '../assets/images/image-avatar.png'
import logo from "../assets/images/logo.svg"
import productThumb from '../assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/images/icon-delete.svg'
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
    const [isMenuOpened, setMenuOpened] = useState(false)
    const [activeTab, setActiveTab] = useState(tabs[0].id)
    const [isCartMenuOpened, setCartMenuOpened] = useState(false)

    const openAndCloseCart = () => {
        if(isCartMenuOpened === false) {
            setCartMenuOpened(true)
        } else {
            setCartMenuOpened(false)
        }
    }

    const toSeeContent = () => {
        if(amountOfProduct > 0) {
            return true
        } else {
            return false
        }
    }

    function Cart() {
        let price: number | string = 0
        const toFormatPrice = () => {
            price = (125*amountOfProduct).toFixed(2)
            return `$${price}`
        }

        function ProductCard() {
            return (
                <AnimatePresence>
                    <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.4}}>
                        <div className='flex justify-between m-6 space-x-4'>
                            <div id='productContainer' className='flex space-x-4'>
                                <img src={productThumb} width={50} alt="sneakers" className='rounded-md'/>
                                <div className='flex flex-col justify-between'>
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p>$125.00 x {amountOfProduct} <em className='not-italic font-bold text-black text-lg ml-1'> {toFormatPrice()}</em></p>
                                </div>
                            </div>
                            <button type='button' aria-label='Press here to delete your product'>
                                <img src={deleteIcon} alt="" role='presentation'/>
                            </button>
                         </div>
                        <div className='px-5'>
                            <button type="button" className='bg-primary-Orange w-full h-14 rounded-xl'>
                                <span className='text-white font-bold'>Checkout</span>
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )
        }

        return (
            <AnimatePresence>
                {isCartMenuOpened && 
                <>
                    <motion.div
                    key="card"
                    initial={{height: 0}}
                    animate={{height: 260}}
                    transition={{duration: 0.5}}
                    className='font-Kumbh text-neutral-Dark-grayish-blue bg-white rounded-xl pb-8 shadow-cartMenu absolute right-2 transform translate-y-14 z-30 lg:translate-y-2/3 lg:-translate-x-1/2'>
                        <h3 className='font-bold p-5 pb-6 text-black'>Cart</h3>
                        <hr/>
                        <div>
                            {toSeeContent() &&
                            <>
                            <ProductCard></ProductCard>
                            </>}
                            {!(toSeeContent()) &&
                            <>
                            <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.4}}
                            className='p-20 px-24 font-bold flex justify-center items-center'>
                                <p>Your cart is empty.</p>
                            </motion.div>
                            </>}
                        </div>
                        
                    </motion.div>
                    <div className='fixed z-20 opacity-30 w-full h-full top-0 left-0' onClick={() => openAndCloseCart()}></div>
                </>}      
            </AnimatePresence>
        )
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
                onClick={() => setMenuOpened(true)}
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

            <Cart></Cart>  

            <div className='flex relative items-end space-x-6 lg:items-center lg:space-x-12 pr-1'>
                <button 
                type='button' 
                aria-label='Press here to see your shopping list'
                onClick={() => openAndCloseCart()}
                className='relative'>
                    <img src={menuCart} alt="" role='presentation'/>
                    {amountOfProduct > 0 && 
                    <>
                    <div className='absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-primary-Orange rounded-full px-2'>
                        <p className='text-white font-Kumbh text-xs'>{amountOfProduct}</p>
                    </div>
                    </>}
                </button>     
                <img src={profileIcon} alt="profile" className='w-6 lg:w-12'></img>
            </div>

            <AnimatePresence>
                {isMenuOpened &&
                <> 
                    <motion.div
                    initial={{x: '100vw'}}
                    animate={{x: '0'}}
                    transition={{type: 'just'}}
                    exit={{x: '100vw'}}
                    onClick={() => setMenuOpened(false)}
                    className='fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50'/>

                    <motion.nav
                    initial={{x:'-16rem'}}
                    animate={{x:'0'}}
                    transition={{type: 'just'}}
                    exit={{x:'-16rem'}}
                    aria-hidden='true'
                    className='fixed bg-white top-0 left-0 h-full w-64 px-6 py-5 space-y-10 z-50'>
                        <button type='button' aria-label='Press here to close the menu' className='mb-3' onClick={() => setMenuOpened(false)}>
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