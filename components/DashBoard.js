import React from 'react'
import Link from "next/link"
import { useUser } from '@/lib/hooks'


export default function DashBoard() {
  const user = useUser()
  return (
    <>
    <header className="text-gray-700 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center relative z-40 ">
   
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
             <Link href ="/student/profile"><div className='h-[15%]  w-[70%]  flex justify-center align-middle  text-xl hover:bg-shadedblack  transition-all  hover: border-b-2 mx-auto rounded-t-xl duration-150  rounded-lg tracking-widest '><h1 className='my-auto'> PROFILE </h1></div></Link> 
            <Link href="/student/tests"><div className='h-[15%] w-[70%] mx-10 flex justify-center align-middle  text-xl hover:bg-shadedblack   hover: border-b-2  rounded-t-xl duration-150 hover:rounded-lg tracking-widest' > <h1 className='my-auto'> TESTS</h1></div></Link>
            <Link href="/student/academics"><div className='h-[15%]  w-[70%] mx-10 flex justify-center align-middle  text-xl hover:bg-shadedblack   hover: border-b-2  rounded-t-xl duration-150 hover:rounded-lg tracking-widest'> <h1 className='my-auto'> ACADEMICS</h1></div></Link>
            <Link href="/student/circular"><div className='h-[15%] w-[70%] mx-10  flex justify-center align-middle  text-xl hover:bg-shadedblack   hover: border-b-2  rounded-t-xl duration-150   tracking-widest'> <h1 className='my-auto'> CIRCULAR</h1></div></Link>
            <Link href={{pathname:'/student/results',query:{username:user.username}}}><div className='h-[15%] w-[70%] mx-10  flex justify-center align-middle  text-xl hover:bg-shadedblack   hover: border-b-2  rounded-t-xl duration-150  tracking-widest'> <h1 className='my-auto'> RESULTS</h1></div></Link>
            <Link href={{pathname:'/student/fees',query:{username:user.username}}}><div className='h-[15%] w-[70%] mx-10  flex justify-center align-middle  text-xl hover:bg-shadedblack   hover: border-b-2  rounded-t-xl duration-150  tracking-widest'> <h1 className='my-auto'> FEES</h1></div></Link>
    </nav>
    <Link href="/api/logout" className='text-orange-600 text-lg mx-2 font-semibold hover:text-orange-900 hover:underline'>Logout</Link>
  </div>
</header>
</>
  )
}
