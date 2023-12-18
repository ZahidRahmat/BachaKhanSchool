import mongoose from "mongoose";
const SignupSchema = mongoose.Schema({
    
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
});
const RegisteredUsers = mongoose.model('RegisteredUsers',SignupSchema);
export default RegisteredUsers;