import { useUser } from "./hooks"
import clientPromise from "./mongodb"


export async function createUser({ username, password }) {
  const user={
    username,
    password,
    createdAt:Date.now()
  }
  const db=await clientPromise
  const datb=db.db("users")
  console.log("connected in created")
  await datb.createCollection(user.username)
  await datb.collection(user.username).insertOne(user)
  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  const db=await clientPromise
  const datb=db.db("users")
  console.log("conn")
  try{
    const user=await datb.collection(username).findOne({"username":username})
    return user
  }
  catch(error){
      return {"error":error}
  }
}



export async function addDetails(b){
  console.log("inside add Detials",b);
  try{
    const db=await clientPromise
    const datb=db.db("users")
    console.log("connected to add Details")
    await datb.collection(b.username).findOneAndUpdate({"username":b.username},{$set:b})
    return {"sucess":true}
  }
  catch(e){
    return {"error":error}
  }
  
}


// export async function AddAddress(b){
//   const user = useUser()
//   const username= user.username
//   try{
//     const db=await clientPromise
//     const datb=db.db("users")
//     console.log("connected to add Details")
//     // await datb.createCollection(user.rollnumber)
//     await datb.collection(username).findOneAndUpdate({"username":username},{$set:b})
//     return {"sucess":true}
//   }
//   catch(e){
//     return {"error":error}
//   }

// }

export function validatePassword(user, inputPassword) {
    if(user.password==inputPassword){
      return true
    }
    else{
      return false
    }

}
