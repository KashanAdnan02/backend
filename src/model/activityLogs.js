import mongoose, { model, Schema } from "mongoose";



const activityScehma = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth"
    },
    time: {
        type: String
    },
    status: {
        type: String,
        enum: ['present',"leave",'absent']
    }
},{timestamps: true})


const Activity = model('logs',activityScehma)
export default Activity