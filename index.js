import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Addstudent from './routes/Addstudent.js';
// import multer from "multer";
import router from "./routes/Addstudent.js";
// import feedbackRoutes from './routes/feedbackRoutes.js';

 
const app = express();
const apiKey = "mongodb+srv://zahid:123@cluster0.vullbp3.mongodb.net/?retryWrites=true&w=majority";
mongoose .set('strictQuery', true);
mongoose.connect(apiKey, {
    useNewUrlParser:true,
    useUnifiedTopology:  true,
}).then(()=>console.log("connected to database")).catch(()=>console.log("not"));

app.listen(5000,()=> console.log("server is listening"));
app.use(cors({
    origin: "https://front-end-bacha-khan-school.vercel.app", // Update to your frontend URL
    methods: ["POST", "GET","PUT","DELETE"],
    credentials: true
  }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://front-end-bacha-khan-school.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.get('/',(req,res)=>{
 res.send("Deployment is working");
})

app.use("/Addstudent",Addstudent);
app.use("/DeleteStudent",Addstudent);
 app.use('/Deleterecord', Addstudent);
// // app.use("/ViewApplicants",hostelApplications);
// app.use('/Feedback', feedbackRoutes);  // Use a specific prefix for your API routes

