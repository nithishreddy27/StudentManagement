import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{type:"String"},
        questions:[{
            questionId:{type:String},
            question:{type:String},
            category:{type:String},
            createdAt:{type:String},
            answered:{type:Boolean},
            answer:{type:String},
            answeredBy:{type:String},
            answeredAt:{type:String},
            voteup:{type:Number},
            votedown:{type:String}
        }]
    }
);

export default mongoose.models.questions || mongoose.model("questions", userSchema);