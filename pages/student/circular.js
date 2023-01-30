import React from "react";
import { motion, AnimatePresence, delay } from "framer-motion";

export default function Circular({ circular }) {
  return (
    <>
      <img
        className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="/cir2.png"
        alt=""
      />

    <div className="flex flex-col">
      

      <div className="relative flex justify-end z-40 p-10 mr-64">
        <div className="py-2 px-12 ">
          <motion.h1
            className="text-2xl text-center"
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          >
            Circulars
          </motion.h1>
          <motion.hr
            className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 w-[200%]"
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          />
        </div>
      </div>

      <div className="relative z-40 flex justify-end mr-40  ">
        {circular.map((test) => (
          <div
            key={test._id}
            className="text-black flex mt-5 border w-[30%] justify-center p-4 "
          >
            {/* <div>
                      <h1><span className='font-semibold'>TEST NAME</span>   : {test.name} </h1>
                      <p><span className='font-semibold'>TEST DATE</span> :{test.about}</p>
                      <p><span className='font-semibold'>TEST ID</span> :{test.date}</p>
                  </div> */}
            <table className="table-auto mt-5 text-xl">
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
                    Date
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
                    {test.date}
                  </motion.td>
                </tr>
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
                    Name
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
                    {test.name}
                  </motion.td>
                </tr>
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
                    About
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
                    {test.about }
                  </motion.td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>  
    
    </>
  );
}
export const getServerSideProps = async () => {
  const respone = await fetch("https://student-management-qanz6atz3-nithishreddy27.vercel.app/api/circular", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await respone.json();
  console.log("inside me", data.done);
  return {
    props: {
      circular: data.done,
    },
  };
};
