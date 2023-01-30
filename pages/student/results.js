import { useRouter } from 'next/router'
import React from 'react'
import { useUser } from '../../lib/hooks'
import { motion, AnimatePresence, delay } from "framer-motion";


export default function Result({results}) {
  const user = useUser()
  const router = useRouter()
  var username = router.query

  return (
    <>
    <img
        className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="/res.png"
        alt=""
      />
    <div>
      {/* {JSON.stringify(user,null,2)} */}
      <h1 className='relative z-40 text-center text-2xl my-10 font-semibold tracking-widest'>Results</h1>
      {
              results.map(result => (
                <div key={result._id} className="text-black  flex mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 relative  z-40 w-[20%] h-20 justify-center  mx-auto p-3">

                  {result.username == username.username && (
                  <motion.div
                    
                  initial={{ x: -25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2,
                  }}>
                      <h1 className=''><span className='font-semibold'>TEST NAME</span>   : {result.name} </h1>
                      <p><span className='font-semibold'>TEST DATE</span> :{result.marks}</p>
                      {/* <p><span className='font-semibold'>TEST ID</span> :{result.testid}</p> */}
                  </motion.div>)}
                 </div>
          ))
        }
    </div>
    </>
  )
}

export const getServerSideProps = async ()=>{
  const respone = await fetch("https://student-management-qanz6atz3-nithishreddy27.vercel.app/api/results",{
    method:"GET",
    headers : {
      'Content-Type' : 'application/json',
    }
  });
  const result=await respone.json();
  console.log("inside me",result.done)
  return{
    props:{
      results:result.done
    }
  }
 
}
