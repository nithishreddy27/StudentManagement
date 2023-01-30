import React from 'react'
import { useUser } from '../lib/hooks'
import Link from "next/link"
export default function Home() {
  const user = useUser()
  const data=JSON.stringify(user,null,2)
  return (
    <>
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <p>{user.username}</p>
        </>
      )}
      <Link href="/api/logout" >LOGOUT</Link>

    </>
  )
}
