require('dotenv').config();
const cors = require('cors');
const app = require('./src/app'); 


app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})