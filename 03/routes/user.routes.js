import express from "express"

const userRoutes = express.Router();

userRoutes.get("/", (req,res)=>{
    res.send(`This is the ${req.url} path`)
})

export {userRoutes}