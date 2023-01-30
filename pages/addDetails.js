import React , {useState} from 'react'
import { useUser } from '../lib/hooks'
import Link from "next/link"
import Router, { useRouter  } from 'next/router';


export default function AddDetails() {
    const user = useUser()
    console.log("current user:",user)
    const u=JSON.stringify(user,null,2)
    var username=""
    if(user){
      username=user.username;
    }


    const [position, setPosition] = useState("student")
    const [mess, setmess] = useState("")
  const [collegeId, setcollegeId] = useState("false")


    return (
    <div>   
        <img className="absolute bottom-0 w-[100%] object-cover"
        src="/st.png"
        alt=""
      />
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-2xl relative grid h-screen place-items-center">
        <div className="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10 ">
        <form method="POST" action="./api/addDetails" className=' mx-auto my-10'>
          <div className='flex justify-between'>
            <div className=''>
              <label htmlFor="userame" className="text-sm font-semibold">Signed in as:</label>
              <input type="text"  value={username} className="mx-2 " id="username" name="username" />
            </div>
            <div>
              <Link href="/api/logout" className='text-orange-600 text-sm mx-2 font-semibold hover:text-orange-900 hover:underline'>Logout</Link>
            </div>
          </div>
            <fieldset className="mt-4">
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="student"
                      name="notificationMethod"
                      value="student"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      defaultChecked="true"
                      onChange={(event) => {
                        setPosition("student");
                      }}
                    />
                    <label
                      htmlFor="student"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      student
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="teacher"
                      name="notificationMethod"
                      value="teacher"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      onChange={(event) => {
                        setPosition("college");
                      }}
                    />
                    <label
                      htmlFor="teacher"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      Teacher
                    </label>
                  </div>
                </div>
              </fieldset>

                    <h1 className='text-center text-3xl font-bold tracking-wide my-2'>Fill Your Details</h1>

              {position == "student" && (
                <div>
                  <div className="grid grid-cols-6 gap-6 mt-4">
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        required
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                        fdprocessedid="yw7fvi"
                        disabled="" 
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        required
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                        fdprocessedid="14yoqp"
                        disabled=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-2 relative -top-[23px]">
                  <label
                    class="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                    id="headlessui-listbox-label-1"
                  >
                    Gender
                    <span class="ml-1 mt-1 text-red-600 font-semibold">*</span>
                  </label>
                    {/* <img src="/arrow.png" alt="" />  */}
                  <div class="relative -top-[23px] left-0">
                  <select name="gender" className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500">
                        <option value="male" >male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                  </div>
                  </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="rollnumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Roll Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="rollnumber"
                        id="rollnumber"
                        autoComplete="roll-number"
                        disabled=""
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                        // value=""
                        fdprocessedid="3p27qy"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        required
                        disabled=""
                        pattern="[6789][0-9]{9}"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                        // value=""
                        fdprocessedid="zyy11"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex">
                      <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                        School / College Name
                      </label>
                      <span className="relative top-4 ml-1 text-red-600 font-semibold">
                        *
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        name="college"
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                        fdprocessedid="bpmeh9"
                        disabled=""
                      />
                    </div>
                  </div>        
                  <div className="mt-4">      
                  <div className="mt-4">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 " type="submit"> Submit </button>
              </div>
              
             
                  </div>
                </div>
              )}






              {position == "college" && <div>
                
              

               
            <div className="grid grid-cols-6 gap-6 mt-4">
              
                <div className="col-span-6 sm:col-span-2 ">
        
                    <div className="flex">
                    <label for="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"/>
                </div>
                <div className="col-span-6 sm:col-span-2 ">
                  <div className="flex">
                    <label
                      for="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                    required />
                    </div>
                    <div className="col-span-6 sm:col-span-2 relative -top-[23px]">
                  <label
                    className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                    id="headlessui-listbox-label-1"
                  >
                    Gender
                    <span className="ml-1 mt-1 text-red-600 font-semibold">*</span>
                  </label>
                  <div className="relative -top-[23px] left-0">
                  <select name="gender" className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                  </div>

                </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="rollnumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Roll Number
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="rollnumber"
                    id="rollnumber"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                    
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="flex">
                  <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                    School / College Name
                  </label>
                  <span className="relative top-4 ml-1 text-red-600 font-semibold">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="designation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Designation
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                    id="designation"
                    name="designation"
                    required
                    type="text"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      School / College Website
                    </label>
                    {/* <span className="ml-1 text-red-600 font-semibold">*</span> */}
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                    id="website"
                    name="website"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Principal Email address
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                    id="email"
                    name="email"
                    required
                    type="email"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Principal Phone Number
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500"
                  />
                </div>
              </div>


                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 mt-10" type="submit"> Submit </button>
              </div>    
              }    
            </form>
            </div>
            </div>
    </div>
 )
}
