import { addDetails } from "../../lib/user";



export default async function handler(req,res){
    console.log("inside add api ",req.body);
    try{
        var data=await addDetails(req.body)
        res.status(200).send({"done":true})
    } 
  catch (error) {
    console.error(error)
    res.status(500).send({"done":error})
  }    
}