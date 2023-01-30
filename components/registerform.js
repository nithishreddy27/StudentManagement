import Link from 'next/link'
import {motion,AnimatePresence, delay} from "framer-motion"


const Form = ({ isLogin, errorMessage, onSubmit }) => (

  <form onSubmit={onSubmit}  className="bg-white shadow-md rounded-lg px-12 pt-20 pb-12 mb-4 mt-5">

   <motion.h1 className="text-center font-bold text-2xl pt-5"
    initial={{y:-25,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{
      duration:0.75,
      delay:0.2
    }}>Sign up to your account</motion.h1>
            <motion.div className="mb-4 mt-10"
            initial={{x:25,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{
              duration:0.75,
              delay:0.2
            }}>
      <label className="block text-gray-700 text-sm mb-2 font-semibold" htmlFor="username">
        Email address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-yellow-500 " id="username" name="username" type="email" required/>
    </motion.div>
    <motion.div className=""
     initial={{x:-25,opacity:0}}
     animate={{x:0,opacity:1}}
     transition={{
       duration:0.75,
       delay:0.2
     }}>
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-400 focus:border-2" id="password" name='password' type="password" required/>
    </motion.div>


    <motion.div className=""
     initial={{x:25,opacity:0}}
     animate={{x:0,opacity:1}}
     transition={{
       duration:0.75,
       delay:0.2
     }}>
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmpassword">
        Confirm Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-400 focus:border-2" id="rpassword" name="rpassword" type="password" required/>
    </motion.div>
    <motion.p
     initial={{x:-25,opacity:0}}
     animate={{x:0,opacity:1}}
     transition={{
       duration:0.75,
       delay:0.2
     }}>Already a user? <Link href="/login" className="hover:underline">Log in</Link></motion.p>
    <p id="mess"></p>
    <div className='text-center mt-5'>
      <input type="submit" value="Sign up"  className='bg-yellow-500 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-yellow-600'/>
            
    </div>
          
    {errorMessage && <p className="error">{errorMessage}</p>}

  </form>
)

export default Form
