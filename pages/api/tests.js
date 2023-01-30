import clientPromise from "../../lib/mongodb";
var ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res){
    
    const db=await clientPromise
    const datb=db.db("CollegeDetails")
    console.log("connected")

    if(req.method == "POST"){

        console.log("inside post",req.body)
        const bool=await datb.collection("tests").insertOne(req.body)
        if(!bool){
            console.log("inside noo")
            res.status(200).send({ done: "Done" }) 
        }
        else{   
            res.status(500).send({ done: bool })
        }
    }
    if(req.method == "GET"){

        const bool=await datb.collection("tests").find().toArray()
        console.log("bool",bool)
        if(!bool){
            console.log("inside noo")
            res.status(200).send({ done: "not found" }) 
        }
        else{   
            res.status(500).send({ done: bool })
        }
    }

    if(req.method == "DELETE"){
        
        console.log("in delete",req.query.testid);
        var s=req.query.testid
        await datb.collection("tests").findOneAndDelete({"_id":ObjectId(s)} )
        console.log("deleted");
        res.status(200).send({done:"true"})

    }
}