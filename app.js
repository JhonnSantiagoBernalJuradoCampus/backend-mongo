import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import alquilerRouter from "./routes/alquiler.routes.js";
import automovilRouter from "./routes/automovil.routes.js";
import clienteRouter from "./routes/cliente.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";
import registroDevolucionRouter from "./routes/registroDevolucion.routes.js";
import registroEntregaRouter from "./routes/registroEntrega.routes.js";
import reservaRouter from "./routes/reserva.routes.js";
import sucursalAutomovilRouter from "./routes/sucursalAutomovil.routes.js";
import sucursalRouter from "./routes/sucursal.routes.js";

dotenv.config();
const app = express();

app.use("/alquiler", alquilerRouter);
app.use("/automovil", automovilRouter);
app.use("/cliente", clienteRouter);
app.use("/empleado", empleadoRouter);
app.use("/devolucion", registroDevolucionRouter);
app.use("/entrega", registroEntregaRouter);
app.use("/reserva", reservaRouter);
app.use("/sucu_auto", sucursalAutomovilRouter);
app.use("/sucursal", sucursalRouter);

conectarDB();

let myConfig = JSON.parse(process.env.MY_CONFIG);
app.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})