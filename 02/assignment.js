import express from "express";

const app = express();

const middleware1 = (req,res,next) => {
    console.log("middleware of the / route");
    next();
}

const middleware2 = (req,res,next) => {
    console.log("middleware of the /user route");
    next();
}

app.use("/user", middleware2, (req,res,next)=> {
    res.send("<h1>THE /user ROUTE</h1>")
})
app.use("/", middleware1, (req,res,next)=> {
    res.send("<h1>THE / ROUTE</h1>")
})

app.listen(3000, ()=>{
    console.log("server is running!");
})