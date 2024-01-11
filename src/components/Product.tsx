import { motion, AnimatePresence } from 'framer-motion'
import product1mobile from '../assets/images/image-product-1-mobile.jpg'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'

import productThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import productThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import productThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import productThumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import productImage1 from '../assets/images/image-product-1.jpg'
import productImage2 from '../assets/images/image-product-2.jpg'
import productImage3 from '../assets/images/image-product-3.jpg'
import productImage4 from '../assets/images/image-product-4.jpg'
import { useState } from 'react'

const productThumbs = [
    {id:'productThumb1', src: productThumb1, width: 80, index: 0},
    {id:'productThumb2', src: productThumb2, width: 80, index: 1},
    {id:'productThumb3', src: productThumb3, width: 80, index: 2},
    {id:'productThumb4', src: productThumb4, width: 80, index: 3}
]

const productImages = [
    {src: productImage1, id: 'productImage1'}, 
    {src: productImage2, id: 'productImage2'}, 
    {src: productImage3, id: 'productImage3'}, 
    {src: productImage4, id: 'productImage4'}
]

const variants = {
    enter: {opacity: 0, x: 500},
    visible: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -300}
}

export default function Product() {
    const [activeThumb, setActiveThumb] = useState(productThumbs[0].id)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const desktopProductPicture = document.getElementById('desktopProduct')

    const showModal = () => {
        setIsModalVisible(true)
    }
    
    const hideModal = () => {
        setIsModalVisible(false)
    }

    const handleClick = (thumb: { id: string, src: string, index: number}) => {
        setActiveThumb(thumb.id)
        if (desktopProductPicture instanceof HTMLImageElement) {
            desktopProductPicture.src = productImages[thumb.index].src
        }
    }

    const seePreviousPicture = () => {
        const currentIndex = parseInt(activeThumb.substring(12))
        console.log(currentIndex)

        if(currentIndex > 1 ) {
            const previousIndex = currentIndex - 1
            const previousImageId = `productImage${previousIndex}`
            setActiveThumb(previousImageId)
        }
    }

    const seeNextPicture = () => {
        const currentIndex = parseInt(activeThumb.substring(12))
        if(currentIndex < 4) {
            const nextIndex = currentIndex + 1
            const nextImageId = `productImage${nextIndex}`
            setActiveThumb(nextImageId)
        }
    }

    return (
        <div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.6, delay: 0.6}} className='relative lg:hidden lg:not-sr-only'>
                <img src={product1mobile} alt="" className='w-full'/>
                <button type='button' className='absolute top-1/2 left-4 -translate-y-1/2 transform w-10 h-10 flex items-center justify-center bg-white rounded-full' aria-label='Press here to see the previous picture'>
                    <img src={previous} alt="" />
                </button>
                <button type='button' className='absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full' aria-label='Press here to see the next picture'>
                    <img src={next} alt="" />
                </button>
            </motion.div>

            <div className='hidden not-sr-only lg:block'>
                <div className='rounded-xl overflow-hidden w-imgThumbWidth'>
                    <img 
                    id='desktopProduct' 
                    src={productImages[0].src} 
                    onClick={() => showModal()}
                    alt="" 
                    className='w-full lg:block cursor-pointer' />
                </div>
                <div className='flex justify-between pt-9'>
                    {productThumbs.map((thumb) => (
                        <div
                        key={thumb.id}
                        onClick={() => handleClick(thumb)}
                        className={`${activeThumb === thumb.id ? 'border-2 border-primary-Orange' : ''} rounded-lg`}>
                            <img
                            key={thumb.id}
                            src={thumb.src}
                            width={thumb.width}
                            className={`${activeThumb === thumb.id ? 'opacity-20 rounded-md' : 'rounded-lg'} cursor-pointer`}/>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {isModalVisible && (
                    <div>
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 0.80}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        id='productModal'
                        onClick={() => hideModal()}
                        className='fixed top-0 left-0 bg-black w-full h-screen z-20'>
                        </motion.div>
                        <div className='fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <motion.div initial={{opacity: 0}} animate = {{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className='relative'>

                                <motion.div className='flex overflow-hidden w-imgModalContainer'>
                                    <AnimatePresence initial={false} mode='wait'>
                                        <motion.img 
                                        key={parseInt(activeThumb[12]) - 1}
                                        src={productImages[parseInt(activeThumb[12]) - 1].src}
                                        variants={variants}
                                        initial='enter'
                                        animate='visible'
                                        exit='exit'
                                        transition={{x:  {type:'spring', stiffness: 200, damping: 20}, duration: 0.2}}
                                        className='rounded-xl'/>
                                    </AnimatePresence>
                                </motion.div>

                                <button aria-label='previous picture'>
                                    <img
                                    onClick={() => seePreviousPicture()}
                                    src={previous}
                                    alt=""
                                    className='bg-white p-4 px-5 rounded-full absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-12' />
                                </button>
                                <button aria-label='next picture'>
                                    <img
                                    onClick={() => seeNextPicture()}
                                    src={next}
                                    alt=""
                                    className='bg-white p-4 px-5 rounded-full absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-12'/>
                                </button>
                            </motion.div>
                            <div className='flex justify-between pt-3'>
                                {productThumbs.map((thumb) => (
                                    <div
                                    key={thumb.id}
                                    onClick={() => handleClick(thumb)}
                                    className={`${activeThumb === thumb.id ? 'border-2 border-primary-Orange bg-white' : ''} rounded-lg`}>
                                        <img
                                        key={thumb.id}
                                        src={thumb.src}
                                        width={thumb.width}
                                        className={`${activeThumb === thumb.id ? 'opacity-40 rounded-md' : 'rounded-lg'} cursor-pointer`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}