import { motion } from 'framer-motion'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
export default function TextArea() {
    const numberElement = document.getElementById('number')
    let number = numberElement ? parseInt(numberElement.innerText) || 0 : 0;
    const subtraction = () => {
        if(numberElement && number > 0) {
            --number
            numberElement.innerText = number.toString()
            return number
        } else {
            return number
        }
    }
    const addition = () => {
        if(numberElement) {
            ++number
            numberElement.innerText = number.toString()
            return number
        }
    }
    const toAdd = () => {
        
    }

    return (
        <motion.div initial={{x: '-100vw'}} animate={{x: '0'}} transition={{duration: 0.6, delay: 1}} className="font-Kumbh p-6">
            <div className="space-y-2">
                <h2 className="text-primary-Orange font-bold text-h2 uppercase tracking-widest">Sneaker company</h2>
                <h1 className="text-h1 font-bold leading-8">Fall Limited Edition Sneakers</h1>
                <p className="text-neutral-Dark-grayish-blue pt-2 tracking-tight">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            </div>

            <div className="flex justify-between items-center my-7">
                <div className="flex items-center space-x-5">
                    <em className="font-bold not-italic text-3xl">$125.00</em>
                    <div className="bg-primary-Pale-orange rounded-md h-7 px-2 flex items-center">
                        <em className="text-primary-Orange not-italic text-lg font-bold">50%</em>
                    </div>
                </div>
                <s className="text-neutral-Dark-grayish-blue font-bold opacity-60 tracking-wide">$250.00</s>
            </div>

            <div className='space-y-5'>
                <div className='flex items-center justify-between bg-neutral-Light-grayish-blue rounded-lg p-3 px-6'>
                    <button id='minus' type='button' onClick={subtraction}>
                        <img src={minus} alt="" />
                    </button>
                    <p id="number" className='font-bold'>0</p>
                    <button id='plus' type='button' onClick={addition}>
                        <img src={plus} alt="" />
                    </button>
                </div>
                <button 
                type="button" 
                className='w-full bg-primary-Orange flex items-center justify-center py-3 rounded-lg'
                onClick={toAdd}>
                    <p className="text-white font-bold">Add to Cart</p>
                </button>
            </div>
        </motion.div>
    )
}