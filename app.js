import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";

dotenv.config();
const app = express();

conectarDB();

let myConfig = JSON.parse(process.env.MY_CONFIG);
app.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})