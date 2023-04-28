import { addDetails} from "../../lib/user";

export default async function handler(req,res){
    // console.log(" inside add api ",req.body);
    try{
      if(req.body.notificationMethod == "student"){
          var data=await addDetails(req.body)
          res.writeHead(302, { Location: '/profile' })
        }
    
        res.end()
    } 
  catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }    
}