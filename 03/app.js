import express from "express";
import { adminRoutes } from "./routes/admin.routes.js";
import { userRoutes } from "./routes/user.routes.js";
import path from "path"
import { fileURLToPath } from "url";
const app = express();
const fileURL = import.meta.url;
const filePath = fileURLToPath(fileURL);
const __dirname = path.dirname(filePath);

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'))
})

app.listen(3000)