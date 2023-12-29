// Import the AddstudentModel using the ESM syntax
import AddstudentModel from "../models/Addstudent.js";

// Get applications
export const getApplications = async (req, res) => {
  try {
    const Addstudent = await AddstudentModel.find();
    res.json(Addstudent);
  } catch (error) {
    console.log("not found any data");
  }
};

// Create application
export const createApplication = async (req, res) => {
  console.log("posting...", req.body);

  const {
    firstName,
    lastName,
    fatherName,
    rollNumber,
    Grade,
    email,
    phoneNumber,
    address,
    myFile,
  } = req.body;

  const newApplicant = new AddstudentModel({
    FirstName: firstName,
    LastName: lastName,
    fatherName: fatherName,
    rollNumber: rollNumber,
    Grade: Grade,
    Email: email,
    PhoneNumber: phoneNumber,
    Address: address,
    myFile: myFile,
  });

  try {
    await newApplicant.save();
    res.json(newApplicant);
  } catch (error) {
    console.log("not saved data");
  }
};

// Delete student
export const DeleteStudent = async (req, res) => {
  console.log(req.params, req.query);
  const { rollNumber } = req.params;

  try {
    console.log('Deleting Student with ID:', rollNumber);
    const result = await AddstudentModel.DeleteStudentById(rollNumber);
    console.log('Deletion result:', result);
    res.json(result);
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(200).json({ error: 'Error deleting product' });
  }
};
