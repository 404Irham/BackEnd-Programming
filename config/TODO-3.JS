// TODO 3: SETUP CONFIG DATABASE
const mysql=require("mysql")
require("dotenv").config()
const {DB_HOST,DB_USER,DB_DATABASE,DB_PASSWORD}=process.env
const db=mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    database:DB_DATABASE,
    password:DB_PASSWORD
})
db.connect()
module.exports=db