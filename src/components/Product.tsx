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
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 600 : -600,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 600 : -600,
        opacity: 0,
      };
    }
  };

export default function Product() {
    const [[page, direction], setPage] = useState([0,0])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const desktopProductPicture = document.getElementById('desktopProduct')

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const hideModal = () => {
        setIsModalVisible(false);
      };
    
      const wrap = (index: number, total: number) => {
        if (index < 0) {
          return total - 1;
        }
        if (index === total) {
          return 0;
        }
        return index;
      };
    
      const paginate = (newDirection: number) => {
        const newIndex = wrap(page + newDirection, productImages.length);
        setPage([newIndex, newDirection]);
      };
    
      const handleClick = (thumb: { id: string; src: string; index: number }) => {
        const newIndex = thumb.index;
    
        setPage([newIndex, newIndex > page ? 1 : -1]);
    
        if (desktopProductPicture instanceof HTMLImageElement) {
          desktopProductPicture.src = productImages[newIndex].src;
        }
      };
    
    return (
        <div >
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.6, delay: 0.6}} className='relative lg:hidden lg:not-sr-only'>
                <img src={product1mobile} alt="" className='w-full'/>
                <button type='button' className='absolute top-1/2 left-4 -translate-y-1/2 transform w-10 h-10 flex items-center justify-center bg-white rounded-full' aria-label='Press here to see the previous picture'>
                    <img src={previous} alt="" />
                </button>
                <button type='button' className='absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full' aria-label='Press here to see the next picture'>
                    <img src={next} alt="" />
                </button>
            </motion.div>

            <motion.div initial={{x: '-100vw', opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.6}} className='hidden not-sr-only lg:block'>
                <div className='rounded-xl overflow-hidden w-imgThumbWidth relative h-imgThumbWidth hover:bg-white hover:opacity-80 hover:transition'>
                    <AnimatePresence initial={false}>
                        <motion.img 
                        key={page}
                        src={productImages[page].src}
                        variants={variants}
                        custom={direction}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{x:  {type:'spring', stiffness: 100, damping: 20}, duration: 0.3}}
                        onClick={() => showModal()}
                        className='rounded-xl absolute cursor-pointer'/>
                    </AnimatePresence>
                </div>
                <div className='flex justify-between pt-9'>
                    {productThumbs.map((thumb) => (
                        <div
                        key={thumb.id}
                        onClick={() => handleClick(thumb)}
                        className={`${page === thumb.index ? 'border-2 border-primary-Orange' : 'hover:bg-white hover:opacity-80 hover:transition'} rounded-lg`}>
                            <img
                            key={thumb.id}
                            src={thumb.src}
                            width={thumb.width}
                            className={`${page === thumb.index ? 'opacity-20 rounded-md' : 'rounded-lg'} cursor-pointer`}/>
                        </div>
                    ))}
                </div>
            </motion.div>

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

                                <motion.div className='flex overflow-hidden w-imgModalContainer h-imgModalContainer '>
                                    <AnimatePresence initial={false}>
                                        <motion.img 
                                        key={page}
                                        src={productImages[page].src}
                                        variants={variants}
                                        custom={direction}
                                        initial='enter'
                                        animate='center'
                                        exit='exit'
                                        transition={{x:  {type:'spring', stiffness: 100, damping: 20}, duration: 0.3}}
                                        className='rounded-xl absolute'/>
                                    </AnimatePresence>
                                </motion.div>

                                <button aria-label='previous picture'>
                                    <img
                                    onClick={() => paginate(-1)}
                                    src={previous}
                                    alt=""
                                    className='bg-white p-4 px-5 rounded-full absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-12 z-10' />
                                </button>
                                <button aria-label='next picture'>
                                    <img
                                    onClick={() => paginate(1)}
                                    src={next}
                                    alt=""
                                    className='bg-white p-4 px-5 rounded-full absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-12 z-10'/>
                                </button>
                            </motion.div>
                            <motion.div initial={{opacity: 0}} animate = {{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className='flex justify-between pt-3'>
                                {productThumbs.map((thumb) => (
                                    <div
                                    key={thumb.id}
                                    onClick={() => handleClick(thumb)}
                                    className={`${page === thumb.index ? 'border-2 border-primary-Orange bg-white' : 'hover:bg-white'} rounded-lg h-20`}>
                                        <img
                                        key={thumb.id}
                                        src={thumb.src}
                                        width={thumb.width}
                                        className={`${page === thumb.index ? 'opacity-40 rounded-md' : 'rounded-lg hover:opacity-90'} cursor-pointer`}/>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}