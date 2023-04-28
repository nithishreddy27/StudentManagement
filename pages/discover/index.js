import React, { useState } from 'react'
import { useUser } from '../../lib/hooks'
import Navbar from '../../components/Navbar'
import { getLoginSession } from '../../lib/auth'
import { findUser } from '../../lib/user'
import { useRouter } from 'next/router'

export default function index({questions}) {
    const user=useUser()
    // const ques=JSON.parse(questions)
    // console.log(questions.array)
    const [answer, setanswer] = useState("")
    // console.log("user",user)
    const router = useRouter()
    const date = new Date()
    async function enterAnswer(ans){
        console.log("inside");
        const body = {
            questionId:ans,
            answer:answer,
            answeredBy:user.email,
            answeredAt: date.getDate()
        }
        var response = await fetch("/api/question/allQuestions",{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
        var data = await response.json()
        if(data.done){
            router.reload()
        }
    }
  return (
    
   <div>

        <Navbar/>

        {user&&(<div className='mt-24 w-[50%] mx-auto'>
            {questions.array.map((question)=>(
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
                        <p>QuestionId:{question.questionId}</p>
                        <p>Question:{question.question}</p>
                        <p>Created At: {question.createdAt}</p>
                        <p>Write Answer</p>
                        <textarea name="" id="" cols="50" rows="5" className='border mt-5' value={answer} onChange={(e)=>{setanswer(e.currentTarget.value)}} ></textarea>
                        <button onClick={()=>{enterAnswer(question.questionId)}}>Submit</button>
                        </div>
                        <div className='mx-5 flex w-[25%] '>
                            
                        </div>
                        {/* <div className='mx-5 flex w-[25%] '>
                            <button onClick={()=>{deleteQuestion(index,user.email)}}  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 mx-4 px-3 rounded'>DELETE</button>
                            <button onClick={()=>{deleteQuestion(index)}} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded'>EDIT</button>
                        </div> */}
                    </div>
                )}


            </div>
            ))}
        </div>)}




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
        const data = await fetch(`http://localhost:3000/api/question/allQuestions`)
        response = await data.json()
        // console.log("resposnse",response)
        sendData=response
        // if(!response.done){
            // sendData = JSON.stringify([])
        // }
        // else{
        //     sendData= JSON.stringify(response.done)
        // }
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
