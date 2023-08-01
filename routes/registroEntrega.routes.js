import { Router } from "express";
import { getRegistroEntregas } from "../controllers/registroEntrega.controller.js";

const routes = Router();

routes.get("/", getRegistroEntregas);

export default routes;