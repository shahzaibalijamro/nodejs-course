import express from "express"

const adminRoutes = express.Router();

adminRoutes.get("/", (req,res)=>{
    res.send("This is the " + req.url + " path")
})

export {adminRoutes}