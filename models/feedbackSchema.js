import mongoose from "mongoose";
const feedbackSchema = mongoose.Schema({
    
        name: String,
        email: String,
        role: String,
        comments: String
     

});
const FeedbackModel = mongoose.model('FeedBack',feedbackSchema);
export default FeedbackModel;