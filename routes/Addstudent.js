import express from 'express';

import {  getApplications ,createApplication, DeleteStudent} from '../controllers/Addstudent.js';
import RegisteredUsers from '../models/SignupSchema.js';
import AddstudentModel from '../models/Addstudent.js';


const router = express.Router();
//post get put delete
router.get("/get_students" , getApplications);
router.post("/" , createApplication);


router.delete("/rollNumber", async (req, res) => {


    let {rollNumber} = req.query

    try {
        
        let checkIfRollNumberExists = await AddstudentModel.findOne({rollNumber})
        
        if (checkIfRollNumberExists) {
            await AddstudentModel.findOneAndRemove({rollNumber: rollNumber})
            return res.status(200).json({message: "deleted"})
        }

        return res.status(404).json({message: "not found"})

        return res.status(200).json({message: "success"})
    } catch(e ) {
        console.error(e, "while deleteing user with rollnumber")
        return res.status(200).json({message: 'failed'})
    }
});



router.post("/signup", async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            Password,
            comform_Password
        } = req.body

        console.log(firstName,
            lastName,
            email,
            Password,
            comform_Password
        )
        
        const newUserToAdd = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: Password
        }

        const newDataForUser = new RegisteredUsers(newUserToAdd)
        await newDataForUser.save()
        return res.status(200).json({message: "success"})
    } catch(e) {
        console.error(e, 'while saving user to db')
        return res.status(200).json({message: "failed"})
    }
})

router.post("/login", async (req, res) => {


    try {
        const {
            email,
            password
        } = req.body

        const checkUserExists = await RegisteredUsers.findOne({Email: email, Password: password})
         
        if (checkUserExists) return res.status(200).json({message: "exists"})
        return res.status(200).json({message: "notfound"})
    } catch(e) {
        console.error(e, 'while loggin user in')
        res.status(200).json({message: "failed"})
    }
})

export const Deleterecord = async (req, res) => {
    const { rollNumber } = req.params;
  
    try {
      console.log('Deleting student with ID:', rollNumber);
      const result = await Addstudent.deletestudentById(rollNumber);
      console.log('Deletion result:', result);
      res.json(result);
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(200).json({ error: 'Error deleting product' });
    }
  };
//  router.post("/deleteUser", async (req, res) =>
//  {
//     const {rollNumber}=req.body;
//     try{
//         User.deleteOne({rollNumber: rollNumber}, function(err, res){
//             console.log(err);
//         });
//     res.send({status:"OK", data: "Deleted"});
//     } catch (error){
//         console.log(error);
//     }
//  });


export default router; 