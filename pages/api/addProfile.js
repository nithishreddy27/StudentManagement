import { AddDetails } from "../../lib/user";



export default async function handler(req,res){
  
    console.log("inside add api ",req.body);
    try{
        var data=await AddDetails(req.body)
        res.writeHead(302, { Location: '/student/profile' })
        res.end()
    } 
  catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }    
}