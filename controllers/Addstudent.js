import AddstudentModel from "../models/Addstudent.js"


export const getApplications = async( req, res ) => {
    
    try {
        const Addstudent = await AddstudentModel.find();
        res.json(Addstudent);
    } catch (error) {
        console.log("nor found any data");
    }
};



// export const getApplicationss = async( req, res ) => {
    
//     try {
//         const Addstudent = await AddstudentModel.findOne({_id:req.params.id});
//         res.json(Addstudent);
//     } catch (error) {
//         console.log("nor found any data");
//     }
// };


export const createApplication  = async ( req, res ) => {
console.log("posting...", req.body);

     
     
const FirstName = req.body.firstName;
const FirstNameInStringFormat = FirstName.toString();

const LastName = req.body.lastName;
const LastNameInStringFormat = LastName.toString();


const fatherName = req.body.fatherName;
const fatherNameInStringFormat = fatherName.toString();

const  rollNumber = req.body.rollNumber;
const  rollNumberInStringFormat =  rollNumber.toString();

const  Grade = req.body. Grade;
const  GradeInStringFormat =  Grade.toString();

const  Email = req.body.email;
const  EmailInStringFormat =  Email.toString();

const  PhoneNumber = req.body.phoneNumber;
const  PhoneNumberInStringFormat =  PhoneNumber.toString();

const Address = req.body.address;
const AddressInStringFormat = Address.toString();

const myFile = req.body.myFile;
const myFileInStringFormat = myFile.toString();




const newApplicant = new AddstudentModel({
    
    FirstName:FirstNameInStringFormat,
    LastName : LastNameInStringFormat,
    fatherName :fatherNameInStringFormat,
    rollNumber: rollNumberInStringFormat,
    Grade: GradeInStringFormat,
    Email: EmailInStringFormat,
    PhoneNumber: PhoneNumberInStringFormat,
    Address: AddressInStringFormat,
    myFile : myFileInStringFormat,
});
try {
    await newApplicant.save();
    res.json(newApplicant);
} catch (error) {
    console.log("not saved data");
}

};
export const DeleteStudent = async (req, res) => {

    console.log(req.params, req.query)
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