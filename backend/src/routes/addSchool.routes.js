
const express = require('express')
const connectToDB = require('../db/db')
const db = connectToDB();


const router = express.Router()

// router.get('/',(req,res)=>{
//     db.query("SELECT * FROM schools",(err,results)=>{
//         if(err){
//             console.error("Error fetching schools:", err);
//             return res.status(500).json({error : "Database error"});
//         }

//         res.json(results);
//     })
// })

router.post('/',(req,res)=>{
    const {schoolName , address, cityName ,stateName , contactNumber , email ,imgUrl} = req.body;
    // const finalImg = imgUrl && imgUrl.trim() !== "" ? imgUrl : "default.jpg";
    // console.log(data)

    if( !schoolName || !address || !cityName || !stateName || !contactNumber || !email ){
        return res.status(400).json({error: "All fields are required"});
    }

    const sql = `
        INSERT INTO schools (name, address, city, state, contact, email_id, image)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(
        sql,
        [ schoolName, address, cityName, stateName, contactNumber ,email , "default.jpg"],
        (err,result)=>{
            if(err){
                console.error("Error inserting school:",err);
                return res.status(500).json({ error:"Database error" });
            }
            res.status(201).json({message: "School added sucessfully",id: result.insertId });
        }
    ) 
})

module.exports = router;