import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Form from '../components/registerform'


const Signup = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`)
      return
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/addDetails')
      } 
      else {
        console.log("in push")
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <>
      
      {/* <img className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="https://img.freepik.com/free-vector/black-frames-collage-gray-brick-wall_107791-17825.jpg?w=1060&t=st=1674748308~exp=1674748908~hmac=03612fb1894293991f969a1c83b02bee9169182a7506d2bf30108d9dba49fd3d"
        alt=""
      /> */}


  <div className="relative z-40 h-screen flex justify-center align-middle">
        <div className=" bg-slate-200 w-[70%] mx-auto my-auto flex ">
          <div className="w-[40%] p-1">
            <img src="/signup.jpg " className="w-[100%] h-[100%]" alt="" />
          </div>
          <div className="w-60% mx-5">
            <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />

            {/* <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} /> */}
          </div>
        </div>
      </div>
    </>

  )
}

export default Signup
