const mysql = require('mysql2')

console.log(process.env.USER)

function connectToDB() {

    const db = mysql.createConnection({
        host: process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database: process.env.DATABASE
    });

    db.connect((err) => {
        if (err) {
            console.error('Mysql connection failed: ', err);
        } else {
            console.log("Database connected")
        }
    })

    return db
}


module.exports = connectToDB;