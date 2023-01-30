import React from 'react'
import { useUser } from '../../lib/hooks';
import { motion, AnimatePresence, delay } from "framer-motion";


export default function Academics({academics}) {
    const user = useUser()
  return (
    <div className=''>
        
        {          
            <>
            <img
        className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="/aca.png"
        alt=""
        />    
        {/* <h1 className='z-40 relative text-center text-2xl tracking-widest my-5 underline-offset-4 underline'>SUBJECTS</h1> */}
        <div>

        <motion.h1 
          className="text-2xl mx-10 mt-10"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
          >
          Course
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

        <div className=' p-10'>
                    <motion.div
                      initial={{ x: -25, opacity: 0 }}
                      animate={{  x: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        delay: 0.2,
                      }}
                        className="w-[25%]  rounded-l  hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 hover:bg-slate-200">
                          <p className='my-2 text-2xl'>Course<span className='font-semibold text-xl mx-5 '>  CSIT</span></p>
                          <p className='my-2  text-2xl'><span className='font-semibold text-xl mx-5  '>Id</span> 123</p>
                         
                      </motion.div>
                </div>



        <motion.h1 
          className="text-2xl mx-10 mt-10"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
          >
          Subjects
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
        <div className='p-10 flex w-[50%] '>

            {
              
              academics.map(test => (
                <div className=' p-10'>
                    <motion.div
                      initial={{ x: -25, opacity: 0 }}
                      animate={{  x: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        delay: 0.2,
                      }}
                        className="w-[100%] border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-10  hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 hover:bg-slate-200">
                          <h1 className='text-center text-2xl font-semibold my-3'>  {test.name.toUpperCase()} </h1>
                          <p className='my-2'><span className='font-semibold '>Topic</span> :{test.topic.toUpperCase()}</p>
                          <p className='my-2'><span className='font-semibold '>Id</span> :{test.id.toUpperCase()}</p>
                          <p className='my-2'><span className='font-semibold '>Faculty Name</span> :{test.fn.toUpperCase()}</p>
                          <p className='my-2'><span className='font-semibold '>Grade</span> :{test.grade.toUpperCase()}</p>
                          <input
                        type="submit"
                        value="View More"
                        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 font-semibold my-10 cursor-pointer block w-[100%] text-white h-10 rounded-md "
                      />
                      </motion.div>
                </div>
             ))
            }
            </div>
        </div>

        <motion.h1 
          className="text-2xl mx-10 mt-10"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
          >
          Attendance
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


        {user && ( 
          <table className="table-auto mt-5 text-xl mx-10 mb-10">
          <tbody>
            <tr className="p-2 ">
              <motion.td
                className=" px-5  font-semibold"
                initial={{ x: -35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                Attendace
              </motion.td>
              <motion.td
                className="px-5"
                initial={{ x: 35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                {/* {user.rollnumber} */}
                80%
              </motion.td>
            </tr>
            <tr className="">
              <motion.td
                className="px-5 py-5 font-semibold"
                initial={{ x: -35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                Total Classes
              </motion.td>
              <motion.td
                className="px-5 py-5"
                initial={{ x: 35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                {/* {user.firstName} {user.lastName} */}
                130
              </motion.td>
            </tr>
            <tr className="my-2">
              <motion.td
                className="px-5 font-semibold"
                initial={{ x: -35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                Attended Classes
              </motion.td>
              <motion.td
                className="px-5"
                initial={{ x: 35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                {/* {user.username} */}
                98
              </motion.td>
            </tr>
            <tr className="my-2">
              <motion.td
                className="px-5 font-semibold py-5"
                initial={{ x: -35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                Remarks
              </motion.td>
              <motion.td
                className="px-5 py-5"
                initial={{ x: 35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                {/* {user.gender} */}
                Good
              </motion.td>
            </tr>
            <tr className="my-2">
              <motion.td
                className="px-5 font-semibold "
                initial={{ x: -35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                Status
              </motion.td>
              <motion.td
                className="px-5 "
                initial={{ x: 35, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                }}
              >
                {/* {user.phone} */}
                Passed
              </motion.td>
            </tr>
          </tbody>
        </table>
        )}
        
            </>

        }

    </div>
  )
}

export const getServerSideProps = async ()=>{
  // console.log("object");
  const respone = await fetch("http://localhost:3000/api/academics",{
    method:"GET",
    headers : {
      'Content-Type' : 'application/json',
    }
  });
  const academics=await respone.json();
//   console.log("inside me",.done)
  return{
    props:{
      academics:academics.done
    }
  }
 
}
