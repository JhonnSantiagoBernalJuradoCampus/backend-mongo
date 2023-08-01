import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import alquilerRouter from "./routes/alquiler.routes.js";
import automovilRouter from "./routes/automovil.routes.js"

dotenv.config();
const app = express();

app.use("/alquiler", alquilerRouter);
app.use("/automovil", automovilRouter);

conectarDB();

let myConfig = JSON.parse(process.env.MY_CONFIG);
app.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})