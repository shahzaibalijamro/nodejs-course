import path from "path";

import express from 'express';

import { shopRoutes } from './routes/shop.routes.js';
import { customerRoutes } from './routes/customer.routes.js';
import { fileURLToPath } from "url";

const app = express();


const fileUrl = import.meta.url;
const filePath = fileURLToPath(fileUrl);
export const __dirname = path.dirname(filePath);

app.use(express.static(path.join(__dirname, 'public')))
app.use("/shop", shopRoutes)
app.use("/customer", customerRoutes)

app.use((request,response)=>{
    response.status(200).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000, ()=>{
    console.log('app is running!');
})