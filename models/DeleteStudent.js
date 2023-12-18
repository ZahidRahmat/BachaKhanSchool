import mongoose from "mongoose";
const DeleteSchema = mongoose.Schema({
    
    FirstName: String,
    fatherName: String,
    rollNumber: String,
});
const DeleteUsers = mongoose.model('DeleteUsers',DeleteSchema);
export default DeleteUsers;