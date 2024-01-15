import { useDispatch } from "react-redux"
import Header from "./components/Header"
import Product from "./components/Product"
import TextArea from "./components/TextArea"
import { motion } from "framer-motion"
import { useState } from "react"
import { incrementByAmount } from "./state/product/productSlice"

function App() {
  const dispatch = useDispatch()
  const [ number, setNumber] = useState(0)
  const minusElement = document.getElementById('minusElement')
  const plusElement = document.getElementById('plusElement')

  const toUpdateNumber = (value: number) => {
    if ((number >= 0 && value > 0) || (number >= 1 && value < 0)) {
      setNumber(number + value);
    }
  }   

  const toAdd = () => {
    dispatch(incrementByAmount(number))
    setNumber(0)
  }

  if(number < 1) {
    minusElement?.setAttribute('fill', '#FFCBA6')
    document.getElementById('minus')?.classList.add('cursor-not-allowed')
  } else {
    document.getElementById('minus')?.classList.remove('cursor-not-allowed')
    minusElement?.setAttribute('fill', '#FF7E1B')
  }

  const minusColorEnter = () => { 
    if (minusElement && number > 0) {
      minusElement.setAttribute('fill', '#FF0000')
    }
  }
  const minusColorLeave = () => {
    if (minusElement && number > 0) {
      minusElement.setAttribute('fill', '#FF7E1B')
    }
  }

  const plusColorEnter = () => { 
    if (plusElement) {
      plusElement.setAttribute('fill', '#FF0000')
    }
  }
  const plusColorLeave = () => {
    if (plusElement) {
      plusElement.setAttribute('fill', '#FF7E1B')
    }
  }

  return (
    <div id="body" className="w-full min-h-screen lg:px-36 lg:box-border overflow-x-hidden lg:pb-4">
      <Header></Header>
      <main id="main" className="lg:mx-productMarginLeft lg:mt-productMarginTop lg:flex lg:space-x-imgTextAreaSpacing lg:mr-12">
        <Product></Product>
        <motion.section id="text-section" initial={{x: '100vw', opacity: 0}} animate={{x: '0', opacity: 1}} transition={{duration: 0.6, delay: 1}} className="font-Kumbh p-6 lg:pt-12 lg:pl-9 lg:pr-0"> 
          <TextArea></TextArea>
          <div className='space-y-5 lg:flex lg:space-x-4 lg:space-y-0 lg:mt-9'>
              <div className='flex items-center justify-between bg-neutral-Light-grayish-blue rounded-lg p-1 px-1 lg:p-3 lg:w-60 lg:h-14'>
                  <button id='minus' type='button' onClick={() => toUpdateNumber(-1)} onMouseEnter={() => minusColorEnter()} onMouseLeave={() => minusColorLeave()} className='h-full px-2 py-3 lg:py-0'>
                    <span className="sr-only">Press here to subtract one product</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="12"
                    height="4"
                    aria-hidden='true'
                    focusable='false'
                  >
                    <defs>
                      <path
                        id="a"
                        d="M11.357 3.332A.641.641 0 0012 2.69V.643A.641.641 0 0011.357 0H.643A.641.641 0 000 .643v2.046c0 .357.287.643.643.643h10.714z"
                      ></path>
                    </defs>
                    <use className="transition-colors duration-200" id="minusElement" fill="#FFCBA6" xlinkHref="#a"></use>
                  </svg>
                  </button>
                  <p aria-label="Actual amount" id="number" className='font-bold'>{number}</p>
                  <button id='plus' type='button' onClick={() => toUpdateNumber(1)} onMouseEnter={() => plusColorEnter()} onMouseLeave={() => plusColorLeave()} className='h-full py-3 px-2 lg:py-0'>
                    <span className="sr-only">Press here to buy one more</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="12"
                    height="12"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <defs>
                      <path
                        id="b"
                        d="M12 7.023V4.977a.641.641 0 00-.643-.643h-3.69V.643A.641.641 0 007.022 0H4.977a.641.641 0 00-.643.643v3.69H.643A.641.641 0 000 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 00.643-.643v-3.69h3.691A.641.641 0 0012 7.022z"
                      ></path>
                    </defs>
                    <use className="transition-colors duration-200" id="plusElement" fill="#FF7E1B" xlinkHref="#b"></use>
                  </svg>
                  </button>
              </div>
              <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              type="button"
              className='w-full bg-primary-Orange flex items-center justify-center py-3 rounded-lg shadow-cartButton shadow-orange-300'
              onClick={() => toAdd()}>
                  <p className="text-white font-bold">Add to Cart</p>
              </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
