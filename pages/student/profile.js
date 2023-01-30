import React from "react";
import { useUser } from "../../lib/hooks";
import { useFieldArray, useForm } from "react-hook-form";
import Router from "next/router";
import { motion, AnimatePresence, delay } from "framer-motion";

export default function profile() {
  const user = useUser();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      test: [{}],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "test" });

  const onFormSubmit = async (data) => {
    const body = {
      username: user.username,
      education: data.test,
    };
    const res = await fetch("/api/addEducation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status == 200) {
      Router.push("/student/profile");
    } else {
      console.log("error");
    }
  };

  async function addAddress(e) {
    // const user= useUser();
    console.log("in add Address");
    e.preventDefault();
    const body = {
      username: user.username,
      housenumber: e.currentTarget.housenumber.value,
      street: e.currentTarget.street.value,
      city: e.currentTarget.city.value,
      state: e.currentTarget.state.value,
      pincode: e.currentTarget.pincode.value,
    };
    console.log("in add address", body);
    try {
      const res = await fetch("/api/addProfile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/student/profile");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  async function addBiodata(e) {
    // const user= useUser();
    console.log("in add Address");
    e.preventDefault();
    const body = {
      username: user.username,
      fathername: e.currentTarget.fathername.value,
      mothername: e.currentTarget.mothername.value,
      bloodgroup: e.currentTarget.bloodgroup.value,
      adharcardNumber: e.currentTarget.adharcardNumber.value,
      pancardNumber: e.currentTarget.pancardNumber.value,
    };
    console.log("in add address", body);
    try {
      const res = await fetch("/api/addProfile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/student/profile");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <>
      {/* <div>user:{JSON.stringify(user,null,2)}</div> */}
      <img
        className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="/stu.png"
        alt=""
      />

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
          Student Profile
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

        {user && (
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
                  Roll Number
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
                  {user.rollnumber}x
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
                  Name
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
                  {user.firstName} {user.lastName}
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
                  Email
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
                  {user.username}
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
                  Gender
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
                  {user.gender}
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
                  Phone Number
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
                  {user.phone}
                </motion.td>
              </tr>
            </tbody>
          </table>
        )}

        <motion.h1
          className="text-2xl mt-10 "
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
        >
          Address
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

        <div className="relative z-40">
          {user && (
            <div>
              {!user.housenumber && (
                <div className="w-[50%]">
                  <form
                    className="bg-white shadow-md rounded-lg px-12 pt-5  pb-12 mb-4"
                    method="POST"
                    onSubmit={addAddress}
                  >
                    <motion.h1
                      className="font-bold text-2xl"
                      initial={{ y: -25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.75,
                        delay: 0.2,
                      }}
                    >
                      Add Address
                    </motion.h1>
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
                        House Number
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 "
                        id="housenumber"
                        name="housenumber"
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
                        Street/Locality
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                        id="street"
                        name="street"
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
                        htmlFor="city"
                      >
                        City
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                        id="city"
                        name="city"
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
                        htmlFor="distict"
                      >
                        District
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                        id="distict"
                        name="distict"
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
                        htmlFor="state"
                      >
                        State
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                        id="state"
                        name="state"
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
                        htmlFor="pincode"
                      >
                        pincode
                      </label>
                      <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                        id="pincode"
                        name="pincode"
                        type="text"
                        required
                      />
                    </motion.div>
                    <div className="text-center mt-5">
                      <input
                        type="submit"
                        value="Submit"
                        className="bg-gradient-to-r from-cyan-500 focus:ring-2 to-blue-500 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md "
                      />
                    </div>
                  </form>
                </div>
              )}

              {user.housenumber && (
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
                        House Number
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
                        {user.housenumber}
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
                        Street/Locality
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
                        {user.street}
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
                        City
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
                        {user.city}
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
                        State
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
                        {user.state}
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
                        Pin Code
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
                        {user.pincode}
                      </motion.td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
        <motion.h1
          className="text-2xl mt-10 "
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
        >
          Education
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

        {user && (
          <div className="z-40 relative">
            {!user.education && (
              <div>
                <div className="my-10 mx-5">
                  <form onSubmit={handleSubmit(onFormSubmit)}>
                    <button
                      onClick={() => append({ name: "" })}
                      className="bg-green-200 p-2 rounded-full"
                    >
                      Add Education
                    </button>
                    <div className="flex flex-col">
                      {fields.map(({ id }, index) => {
                        return (
                          <div key={id}>
                            <label
                              htmlFor="name"
                              className="m-2 text-xl font-semibold my-2"
                            >
                              Enter Name:
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border-none rounded w-[25%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2 "
                              {...register(`test.${index}.name`)}
                              id="name"
                            />
                            <button
                              onClick={() => remove(index)}
                              className="bg-red-200 mx-4 rounded-full p-2"
                            >
                              remove
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {/* <button type="submit ">Submit</button> */}
                    <input
                      type="submit"
                      value="Submit"
                      className="bg-gradient-to-r from-cyan-500 focus:ring-2 to-blue-500 font-semibold cursor-pointer block w-[10%] text-white h-10 rounded-md "
                    />
                  </form>
                </div>
              </div>
            )}

            {user.education && (
              <div>



<table className="table-auto mt-5 text-xl">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>University</th>
                            <th>Subject</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="p-2 ">
                           <td>

                            <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              CVR
                            </motion.td>
                              </td>
                              <td>
                              <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              2024
                            </motion.td>
                              </td>
                              <td>
                              <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              JNTU
                            </motion.td>
                              </td>
                              <td>
                              <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              CSIT
                            </motion.td>
                              </td>
                          </tr>



                          <tr className="p-2 my-2">
                           <td>

                            <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              Sri Chaitanya
                            </motion.td>
                              </td>
                              <td>
                              <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              2020
                            </motion.td>
                              </td>
                              <td>
                              <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              Sri Chaitanya
                            </motion.td>
                              </td>
                              <td>
                              <motion.td
                              className="px-5"
                              initial={{ x: 35, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                duration: 0.75,
                                delay: 0.2,
                              }}
                              >
                              MPC
                            </motion.td>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                {/* {user.education.map((edu) => {
                  console.log("education:", edu);
                
                  return (
                    <>
                     
                     
                    </>
                  );
                })} */}
              </div>
            )}
          </div>
        )}
        <motion.h1
          className="text-2xl mt-10 "
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
          }}
        >
          Bio Data
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
        {user && (
          <>
            {!user.fathername && (
              <div className="w-[50%]">
                <form
                  className="bg-white shadow-md rounded-lg px-12 pt-5  pb-12 mb-4"
                  method="POST"
                  onSubmit={addBiodata}
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
                      Father Name
                    </label>
                    <input
                      className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 "
                      id="fathername"
                      name="fathername"
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
                      htmlFor="mothername"
                    >
                      Mother Name
                    </label>
                    <input
                      className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                      id="mothername"
                      name="mothername"
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
                      htmlFor="bloodgroup"
                    >
                      Blood Group
                    </label>
                    <input
                      className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                      id="bloodgroup"
                      name="bloodgroup"
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
                      htmlFor="adharcardNumber"
                    >
                      AdharCard Number
                    </label>
                    <input
                      className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                      id="adharcardNumber"
                      name="adharcardNumber"
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
                      htmlFor="pancardNumber"
                    >
                      Pancard Number
                    </label>
                    <input
                      className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2"
                      id="pancardNumber"
                      name="pancardNumber"
                      type="text"
                      required
                    />
                  </motion.div>

                  <div className="text-center mt-5 z-40 relative">
                    <input
                      type="submit"
                      value="Submit"
                      className="bg-gradient-to-r from-cyan-500 focus:ring-2 to-blue-500 font-semibold cursor-pointer block w-[50%] mx-auto text-white h-10 rounded-md "
                    />
                  </div>
                </form>
              </div>
            )}
            {user.fathername && (
              <div className="relative z-40">
                {user.fathername && (
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
                          Father Name
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
                          {user.fathername}
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
                          Mother Name
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
                          {user.mothername}
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
                          Blood Group
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
                          {user.bloodgroup}
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
                          Adharcard Number
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
                          {user.adharcardNumber}
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
                          Pancard Number
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
                          {user.pancardNumber}
                        </motion.td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
{
  /* <div className='m-10'>
        Add Subjects
        
        <form onSubmit={handleSubmit(onFormSubmit)}>
            
            
            <button onClick={()=>append({name:""})} >Append new input</button>
            <div className='flex flex-col'>
                {fields.map(({id},index)=>{
                    return (
                        <div key={id}>
                            <input type="text" className='m-2' {...register( `test.${index}.name`)} />
                            <button onClick={()=>remove(index)}>remove</button>
                        </div>
                    )
                })}
            </div>
            <button type="submit">Submit</button>
        </form>

    </div> */
}
