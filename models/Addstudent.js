import mongoose from "mongoose";
const AddstudentStructure = mongoose.Schema({
    
    FirstName: String,
    LastName: String,
    fatherName: String,
    rollNumber: String,
    Grade: String,
    Email: String,
    PhoneNumber: String,
    Address: String,
    myFile: String,
    // Password: String,
    // Comform_Password:String


});
const AddstudentModel = mongoose.model('hostelApplications',AddstudentStructure);
export default AddstudentModel;