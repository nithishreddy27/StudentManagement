import Question from "../../../model/Question"


export default async function handler(req,res){
    // console.log(" inside add api ",req.body);

    try{
        if(req.method=="POST"){
            const email=req.body.email
            const q = await Question.findOne({"email":email})
            
                if(q){
                    // console.log("req",req.body)
                    await q.questions.push(req.body.questions[0])
                    q.save()
            }
            else{
                const  ques = await Question(req.body)
                await ques.save()
            }
            res.status(200).send({"added":true})
        }   
        else if(req.method=="GET"){
            // console.log("email",req.query.email)
            const questions = await Question.find({"email":req.query.email})
            // console.log("questions",questions);
            if(questions.length!=0){
                // console.log("inside api",questions[0].questions)
                res.send({"done":questions[0].questions})
            }
            else{
                // console.log("indwside")
                res.send({"done":false})
            }
        }
        else if(req.method=="DELETE"){
            const index=req.query.index
            console.log(req.query.index)
            const q = await Question.findOne({"email":req.query.email})
            console.log(q)
            // await q.questions.remove()
            // await q.questions.splice(index,1)
            q.save()

        }
    } 
  catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }    
}