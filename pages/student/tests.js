import React from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { useUser } from "../../lib/hooks";

export default function Tests({ tests }) {

 async function deleteTask(id){
  console.log("in deletetask")
    const res=await fetch(`../api/tests?testid=${id}`,{
      method : "DELETE",
      headers: { "Content-Type": "application/json" },
    })

    if(res === 200){
      Router.push("/student/tests")
    }
  }


  async function addTest(e){

    const body = {
      // testname  = e.c
      testname: e.currentTarget.testname.value,
      testdate: e.currentTarget.testdate.value,
      syllabus: e.currentTarget.syllabus.value,
      status : "notcompleted"
    }

    await fetch("../api/tests",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(body)
    })


  }



  const user = useUser()
  // var n="teacher"
  return (
    <>
      <img
        className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="/exam.png"
        alt=""
      />
 
      {user && user.notificationMethod === "student"  && ( <div className="relative z-40 p-10">
        <div className="py-2 px-12">
          <motion.h1
            className="text-2xl"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          >
            Up Coming Tests
          </motion.h1>
          <motion.hr
            className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 w-[50%]"
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          />

          {tests.map((test) => (
            <div
              key={test._id}
              className="text-black flex mt-5 border w-[25%] mx-10 p-3">
              {test.status === "notcompleted" && (
                <table className="table-auto mt-5 text-xl">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
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
                      >{test.subject}</motion.td>
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
                  </tbody>
                </table>
              )}
            </div>
          ))}


        <motion.h1
            className="text-2xl mt-8"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          >
            Completed Tests
          </motion.h1>
          <motion.hr
            className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 w-[50%]"
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          />
          {tests.map((test) => (
            <div
              key={test._id}
              className="text-black flex mt-5 border w-[25%] mx-10 p-3"
            >
              {/* <div>

                      <h1><span className='font-semibold'>TEST NAME</span>   : {test.subject} </h1>
                      <p><span className='font-semibold'>TEST DATE</span> :{test.branch}</p>
                      <p><span className='font-semibold'>TEST ID</span> :{test.testid}</p>
                  </div> */}
              {test.status === "completed" && (
                <table className="table-auto mt-5 text-xl">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
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
                      >{test.subject}</motion.td>
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
                  </tbody>
                </table>
              )}
            </div>
          ))}

        </div>
      </div>)}


      {user && user.notificationMethod === "teacher"  && ( <div className="relative z-40 p-10">
        <div className="py-2 px-12">
          <motion.h1
            className="text-2xl"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          >
            Up Coming Tests
          </motion.h1>
          <motion.hr
            className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 w-[50%]"
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          />

          {tests.map((test) => (
            <div
              key={test._id}
              className="text-black flex mt-5 border w-[25%] mx-10 p-3">
              {test.status === "notcompleted" && (
                <table className="table-auto mt-5 text-xl">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
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
                      >{test.testname}</motion.td>
                      <motion.td
                        className="px-5"
                        initial={{ x: 35, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.75,
                          delay: 0.2,
                        }}
                      >
                        {test.testdate}
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
                       <button className="border p-1 rounded-lg bg-red-700 h-8 ml-72 my-auto" onClick={() => deleteTask(test._id)}>Delete</button>                 
                      </motion.td>  
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          ))}


<motion.h1
            className="text-2xl mt-8"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          >
            Add Test
          </motion.h1>
          <motion.hr
            className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 w-[50%]"
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          />

              <form
                    className="bg-white shadow-md rounded-lg px-12 pt-5 w-[50%] mt-10 pb-12 mb-4"
                    method="POST"
                    onSubmit={addTest}
                  >
                    
                    <motion.div
                      className=""
                      initial={{ x: 25, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.75,
                        delay: 0.2,
                      }}
                    >
                      <label
                        className="block text-gray-700 text-sm mb-2 mt-4 font-semibold"
                        htmlFor="housennumber"
                      >
                        Test Name
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 "
                        id="testname"
                        name="testname"
                        type="text"
                        required
                      />
                    </motion.div>
                    <motion.div
                      className=""
                      initial={{ x: 25, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        delay: 0.2,
                      }}
                    >
                      <label
                        className="block text-gray-700 text-sm font-semibold mt-4 mb-2"
                        htmlFor="street"
                      >
                        Test Date
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                        id="testdate"
                        name="testdate"
                        type="text"
                        required
                      />
                    </motion.div>
                    <motion.div
                      className=""
                      initial={{ x: 25, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        delay: 0.2,
                      }}
                    >
                      <label
                        className="block text-gray-700 text-sm font-semibold mt-4 mb-2"
                        htmlFor="syllabus"
                      >
                        Syllabus
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                        id="syllabus"
                        name="syllabus"
                        type="text"
                        required
                      />
                    </motion.div>
                    
                   
                    <div className="text-center mt-5">
                      <input
                        type="submit"
                        value="Add test"
                        className="bg-gradient-to-r from-cyan-500 focus:ring-2 to-blue-500 font-semibold cursor-pointer block w-[25%] mx-auto text-white h-10 rounded-md "
                      />
                    </div>
                  </form>


        <motion.h1
            className="text-2xl mt-8"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          >
            Completed Tests
          </motion.h1>
          <motion.hr
            className="mt-1 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 w-[50%]"
            initial={{ x: 35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          />
          {tests.map((test) => (
            <div
              key={test._id}
              className="text-black flex mt-5 border w-[25%] mx-10 p-3"
            >
              {/* <div>

                      <h1><span className='font-semibold'>TEST NAME</span>   : {test.subject} </h1>
                      <p><span className='font-semibold'>TEST DATE</span> :{test.branch}</p>
                      <p><span className='font-semibold'>TEST ID</span> :{test.testid}</p>
                  </div> */}
              {test.status === "completed" && (
                <table className="table-auto mt-5 text-xl">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
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
                      >{test.subject}</motion.td>
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
                  </tbody>
                </table>
              )}
            </div>
          ))}

        </div>
      </div>)}
    </>
  );
}

export const getServerSideProps = async () => {
  // console.log("object");
  const respone = await fetch("http://localhost:3000/api/tests", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const test = await respone.json();
  console.log("inside me", test.done);
  return {
    props: {
      tests: test.done,
    },
  };
};
