import { useRouter } from 'next/router'
import React from 'react'
import { motion, AnimatePresence, delay } from "framer-motion";


export default function Fees({fees}) {

    const router = useRouter()
    const username=router.query
  return (
    <div>
        <p>{username.username}</p>
        <img
        className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="/fees.png"
        alt=""
      />
        {/* <p>fees due</p> */}
        <motion.h1 
          className="text-2xl mx-10 mt-10"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
          >
          Fees
        </motion.h1>
        <motion.hr
          className="mt-1 mx-10 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 w-[50%]"
          initial={{ x: 35, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
          
        />
        {
            fees.map(fee => (
                <div key={fee._id} className="w-[20%] relative mx-10 mt-10  border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-10  hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 hover:bg-slate-200">
                  <div>
                      <h1><span className='font-semibold'>NAME</span>   : {fee.name} </h1>
                      <p><span className='font-semibold'>AMOUNT</span> :{fee.amount}</p>
                      <p><span className='font-semibold'>DUE DATE</span> :{fee.duedate}</p>
                  </div>
                 </div>
          ))
        }
    </div>
  )
}

export const getServerSideProps = async ()=>{
    const respone = await fetch("https://student-management-qanz6atz3-nithishreddy27.vercel.app/api/fees",{
      method:"GET",
      headers : {
        'Content-Type' : 'application/json',
      }
    });
    const data= await respone.json();
    console.log("inside me",data.done)
    return{
      props:{
        fees:data.done
      }
    }
   
  }