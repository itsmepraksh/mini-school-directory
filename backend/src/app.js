const express = require('express');
const addSchoolRoutes = require('./routes/addSchool.routes');
const showSchoolRoutes = require('./routes/showSchool.routes');
const cors = require('cors');
const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))

app.use(express.json())
app.use('/addSchool',addSchoolRoutes);
app.use('/showSchool',showSchoolRoutes);

module.exports = app