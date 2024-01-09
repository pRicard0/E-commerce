import { motion } from 'framer-motion'
import product1mobile from '../assets/images/image-product-1-mobile.jpg'
import product1desktop from '../assets/images/image-product-1.jpg'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'

import product1Thumb from '../assets/images/image-product-1-thumbnail.jpg'
import product2Thumb from '../assets/images/image-product-2-thumbnail.jpg'
import product3Thumb from '../assets/images/image-product-3-thumbnail.jpg'
import product4Thumb from '../assets/images/image-product-4-thumbnail.jpg'


export default function Product() {
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
                    <img src={product1desktop} alt="" className='w-full lg:block' />
                </div>
                <div className='flex justify-between pt-9'>
                    <img src={product1Thumb} width={80} alt="" className='rounded-lg'/>
                    <img src={product2Thumb} width={80} alt="" className='rounded-lg'/>
                    <img src={product3Thumb} width={80} alt="" className='rounded-lg'/>
                    <img src={product4Thumb} width={80} alt="" className='rounded-lg'/>
                </div>
            </div>
        </div>
    )
}