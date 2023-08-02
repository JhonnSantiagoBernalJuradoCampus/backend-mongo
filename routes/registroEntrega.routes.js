import { Router } from "express";
import { getRegistroEntregas, getRegistroEntregaId } from "../controllers/registroEntrega.controller.js";

const routes = Router();

routes.get("/", getRegistroEntregas);
routes.get("/:id", getRegistroEntregaId);

export default routes;