// Import necessary modules
import FeedbackModel from './FeedbackModel'; // Adjust the path based on your project structure

// Controller to handle feedback submission
const submitFeedback = async (req, res) => {
  const { name, email, role, comments, image } = req.body;

  try {
    // Create a new feedback instance
    const newFeedback = new FeedbackModel({
      name,
      email,
      role,
      comments,
      image,
    });

    // Save the feedback to the database
    await newFeedback.save();

    // Respond with success message
    return res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { submitFeedback };
