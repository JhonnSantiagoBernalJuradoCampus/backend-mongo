import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import alquilerRouter from "./routes/alquiler.routes.js";
import automovilRouter from "./routes/automovil.routes.js";
import clienteRouter from "./routes/cliente.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";
import registroDevolucionesRouter from "./routes/registroDevolucion.routes.js";

dotenv.config();
const app = express();

app.use("/alquiler", alquilerRouter);
app.use("/automovil", automovilRouter);
app.use("/cliente", clienteRouter);
app.use("/empleado", empleadoRouter);
app.use("/devoluciones", registroDevolucionesRouter);

conectarDB();

let myConfig = JSON.parse(process.env.MY_CONFIG);
app.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})