import { useUser } from '@/lib/hooks'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import DashBoard from "components/DashBoard"
import Link from "next/link"
import {motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const user= useUser()
  const router = useRouter()
  return(
    <AnimatePresence mode='wait'>
      <motion.div 
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration:0.25,
        type:"ease-in-out"
      }}
      variants={{
        initialState:{
          opacity:0,
          // clipPath: "polygon(54% 0, 59% 0, 62% 100%, 57% 100%)",
          // clipPath: "polygon(54% 0, 54% 0, 57% 100%, 57% 100%)",


        },
        animateState:{
          opacity:1,
          // clipPath: "polygon(0 1%, 100% 0, 100% 100%, 0% 100%)",
          // clipPath: "polygon(54% 0, 54% 0, 57% 100%, 57% 100%)",

        },
        exitState:{
          opacity:0,
          // clipPath: "polygon(54% 0, 59% 0, 62% 100%, 57% 100%)",
          // clipPath: "polygon(54% 0, 54% 0, 57% 100%, 57% 100%)",



        }
      }}
      className="base-page-size"
      >

    <div className='w-screen h-screen'>
    {user && (
      <div className=''>
        <DashBoard></DashBoard>
      </div>
    )}
    {/* {!user && ( 
      <div>
      <p>Please log in to your account</p>
      </div>
    )} */}
    <Component {...pageProps} />
    </div>
    </motion.div>
      </AnimatePresence>
  )
}
