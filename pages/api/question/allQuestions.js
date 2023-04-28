import Question from "../../../model/Question"


export default async function handler(req,res){

    try{
         if(req.method=="GET"){
            const users = await Question.find({})
            var arr=[]
            users.map((user)=>{
                user.questions.map((qus)=>{
                    arr.push(qus)
                })
            })
            res.send({"array":arr})
        }
        else if(req.method == "PUT"){
            try {
                const question = await Question.findOneAndUpdate(
                  { 'questions.questionId': req.body.questionId },
                  { $set: {    
                            'questions.$.answered': true,
                            'questions.$.answer': req.body.answer,
                            'questions.$.answeredBy': req.body.answeredBy,
                            'questions.$.answeredAt': req.body.answeredAt,
                } },
                  { new: true }
                );
                res.status(200).send({"done":true})
            } catch (error) {
                console.error(error);
                res.status(500).send({"done":false})

              }
        }
       
    } 
  catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }    
}