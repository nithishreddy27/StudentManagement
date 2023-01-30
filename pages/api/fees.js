import clientPromise from "../../lib/mongodb";

export default async function handler(req, res){
    
    const db=await clientPromise
    const datb=db.db("CollegeDetails")
    console.log("connected")
    const bool=await datb.collection("fees").find().toArray()
    console.log("bool",bool)
    if(!bool){
        console.log("inside noo")
        res.status(200).send({ done: "not found" }) 
    }
    else{   
        res.status(500).send({ done: bool })
    }
}