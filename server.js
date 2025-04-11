const express= require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
require('./db/db.js')
const userRoutes= require('./routes/userRoutes.js');


const app =express();

const PORT= process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})