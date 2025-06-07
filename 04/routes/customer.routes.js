import path from 'path';

import express from "express";
import {__dirname} from "../app.js"
const customerRoutes = express.Router();

customerRoutes.get("/", (request,response)=>{
    response.status(200).sendFile(path.join(__dirname, 'views', 'customer.html'));
})

export {customerRoutes}