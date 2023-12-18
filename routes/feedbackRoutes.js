// feedbackRoutes.js
import express from 'express';
import multer from 'multer';
import feedbackSchema from '../models/feedbackSchema.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files

router.post('/submit-feedback',async (req, res) => {
  try {
    const { name, email, role, comments } = req.body;

    // Assuming you want to store the filename of the uploaded image
   

    const newFeedback = new FeedbackModel({
      name,
      email,
      role,
      comments,
     
    });

    await newFeedback.save();
    res.status(200).json({ message: 'Feedback received successfully!' });
  } catch (error) {
    console.error('Error saving feedback:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
