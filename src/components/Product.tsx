import { motion } from 'framer-motion'
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

const productImages = [productImage1, productImage2, productImage3, productImage4]

export default function Product() {
    const [activeThumb, setActiveThumb] = useState(productThumbs[0].id)

    const handleClick = (thumb: { id: string, src: string, index: number}) => {
        setActiveThumb(thumb.id)

        const desktopProductPicture = document.getElementById('desktopProduct')
        if (desktopProductPicture instanceof HTMLImageElement) {
            desktopProductPicture.src = productImages[thumb.index]
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
                    <img id='desktopProduct' src={productImage1} alt="" className='w-full lg:block cursor-pointer' />
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
        </div>
    )
}