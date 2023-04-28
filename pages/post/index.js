import React, { useState } from 'react'
import { useUser } from '../../lib/hooks'
import { getLoginSession } from '../../lib/auth'
import { findUser } from '../../lib/user'
import Navbar from '../../components/Navbar'
import { Router, useRouter } from 'next/router'

export default function index({userDetails,questions}) {
// const user=useUser() 
// const  user = userDetails
const user = useUser()
// console.log(user)
const date =new Date()
const ques=JSON.parse(questions)
// console.log("inside index",ques)
const router = useRouter()

const [category, setcategory] = useState("one")
const [question, setquestion] = useState("")
const [message, setmessage] = useState("")
async function enterQuestion(){
    // console.log("inside",user)
    const body={
        email:user.email,
        questions:[{
            questionId:Math.floor((Math.random() * 10000) + 1),
            question:question,
            category:category,
            createdAt:date.getDate(),
            answered:false,
        }]
    }
    // console.log("bodu in ",body)
    var response = await fetch("/api/question",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
    var data = await response.json()
    if(data.added){
        setmessage("ADDED SUCCESSFULLY")
        setquestion("")
        router.reload()
    }else{
        setmessage("NOT ADDED")
    }

}

async function deleteQuestion(index,email){
    await fetch(`/api/question?index=${index}?email=${email}`,{
        method:"DELETE"
    })
}


return (
    <div>
        <Navbar/>

<div className='flex justify-center mx-auto mt-28 mb-10'>
  
  
  
    <div className='w-[45%] border p-5 '>
    <h1 className='text-center text-2xl font-semibold my-5'>Post a question</h1>
      
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="col-span-6 sm:col-span-2 ">
          <div className="flex">
            <label
              htmlFor="question"
              className="block text-sm font-medium  text-gray-700"
            >
                Question
            </label>
            <span className="ml-1 text-red-600 font-semibold">
              *
            </span>
          </div>
          <input
            type="text"  
            name="question"
            id="question"
            autoComplete="given-name"
            required
            value={question}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            fdprocessedid="yw7fvi"
            disabled=""
            onChange={(e)=>{setquestion(e.target.value)}}
          />
          <input
            type="text"
            name="category"
            id="category"
            autoComplete="given-name"
            required
            value={category}
            className="border-none"
            fdprocessedid="yw7fvi"
            disabled=""
            onChange={()=>{}}
          />
        </div>
       

{/*        
        <div className="col-span-6 sm:col-span-2 relative -top-[23px]">
          <label
            className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
            id="headlessui-listbox-label-1"
          >
            Choose Category
            <span className="ml-1 mt-1 text-red-600 font-semibold">
              *
            </span>
          </label>
          <div className="relative -top-[23px] left-0">
            <select
              name="gender"
              className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            >
              <option value="computer">COMPUTERS</option>
              <option value="electronics">ELECTRONICS</option>
              <option value="eletrical">ELETRICAL</option>
              <option value="mechanical">MECHANICAL</option>
              <option value="civil">CIVIL</option>
              <option value="business">BUSINESS</option>
            </select>
          </div>
        </div> */}
       
        
        <button className="col-span-1 sm:col-span-2 ">Choose Category</button>
        {/* <h1 className=''>{category}</h1> */}
      </div>
    

      <div className="mt-4">
        
          <div className="mt-4">
            <button
              className="w-[25%] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700  mx-auto"
            //   type="submit"
            onClick={enterQuestion}
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        
        
      </div>
      <h1 className=''>{message}</h1>
    </div>
  
  </div>
<hr />
<div className='p-5 flex justify-center' >


    <div >
        <h1 className='text-2xl text-center'>Your Questions</h1>
        {ques.map((question,index)=>(
            <div key={question.question}>

                {question.answered && (
                    <div className='border border-green-500 p-5 m-5'>
                        <p>Question:{question.question}</p>
                        <p>Answer : {question.answer}</p>
                        <p>Answered By : {question.answeredBy}</p>
                        <p>Answered At: {question.answeredAt}</p>
                    </div>
                )}
                {!question.answered && (
                    <div className='border border-red-500 flex p-5 m-5 justify-around  '>
                        <div className='w-[50%]'>

                        <p>Question:{question.question}</p>
                        <p>Created At: {question.createdAt}</p>
                        </div>
                        <div className='mx-5 flex w-[25%] '>

                        </div>
                        <div className='mx-5 flex w-[25%] '>
                            <button onClick={()=>{deleteQuestion(index,user.email)}}  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 mx-4 px-3 rounded'>DELETE</button>
                            <button onClick={()=>{deleteQuestion(index)}} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded'>EDIT</button>
                        </div>
                    </div>
                )}


            </div>
        ))}
    </div>
</div>

    </div>
  )
}


export const getServerSideProps = async ({ req, res }) => {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    const session = await getLoginSession(req);
    const user = (session?._doc && (await findUser(session._doc))) ?? null;
    if (!user) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    }
    var response
    var sendData
    if(user){
        const data = await fetch(`http://localhost:3000/api/question?email=${user.email}`)
        // console.log(data)
        response = await data.json()
        // console.log("resposnse",response)
        if(!response.done){
            sendData = JSON.stringify([])
        }
        else{
            sendData= JSON.stringify(response.done)
        }
        // if(response)
        // console.log("inside server side",response.done)
        // console.log(response)
    }
    
    return {
        props: {
          userDetails: JSON.stringify(user),
          questions:sendData
        },
      };
}