import express from "express";
import { myDB } from "./db/db.js";

const app = express();

myDB.execute(`SELECT * FROM products`).then(res => {
    console.log(res);
    
}).catch(err => {
    console.log(err);
    
})

app.use("/", (req,res)=>{
    res.send("Hello world")
})

app.listen(3000)