import React from 'react'

export default function testing() {

    async function runMe(){
        var res= await fetch("http://127.0.0.1:8000/test?param1=yoo")
        console.log("res",res)
        var data = await res.json()
        console.log(data)
    }
  return (
    <div>
        <button onClick={runMe}>Submit</button>
    </div>
  )
}
