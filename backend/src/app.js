const express = require('express');
const addSchoolRoutes = require('./routes/addSchool.routes');
const showSchoolRoutes = require('./routes/showSchool.routes');
const app = express()

app.use(express.json())
app.use('/addSchool',addSchoolRoutes);
app.use('/showSchool',showSchoolRoutes);

module.exports = app