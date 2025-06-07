import path from 'path';


import express from "express";

import {__dirname} from "../app.js"

const shopRoutes = express.Router();

shopRoutes.get("/", (request,response)=>{
    response.status(200).sendFile(path.join(__dirname, 'views', 'shop.html'))
})

export {shopRoutes}