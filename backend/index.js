import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from"dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import path from "path"

dotenv.config({});


const app = express();

const _dirname = path.resolve();

// -- draft --
app.get("/home" , (req , res) =>{
    return res.status(200).json({
        message: "I am coming from backend",
        success : true
    })
});


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'https://job-portal-ten-lime.vercel.app',
    credentials : true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// API 
app.use("/api/v1/user", userRoute); 
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_,res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});


// examples of how api will be made
// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/user/login"
// "http://localhost:8000/api/v1/user/profile/update"

app.listen(PORT, () => { 
    connectDB();
    console.log(`Server is running at port ${PORT}`);
})         