const express = require('express')
const connectToDB = require('../db/db')
const db = connectToDB();


const router = express.Router()

router.get('/',(req,res)=>{
    db.query("SELECT * FROM schools",(err,results)=>{
        if(err){
            console.error("Error fetching schools:", err);
            return res.status(500).json({error : "Database error"});
        }

        res.status(200).json(results);
    })
})


module.exports = router;