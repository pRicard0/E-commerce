import { motion } from 'framer-motion'
import product1 from '../assets/images/image-product-1-mobile.jpg'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'

export default function Product() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.6, delay: 0.6}} className='relative'>
            <img src={product1} alt="" className='w-full'/>

            <button type='button' className='absolute top-1/2 left-4 -translate-y-1/2 transform w-10 h-10 flex items-center justify-center bg-white rounded-full' aria-label='Press here to see the previous picture'>
                <img src={previous} alt="" />
            </button>

            <button type='button' className='absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full' aria-label='Press here to see the next picture'>
                <img src={next} alt="" />
            </button>
        </motion.div>
    )
}