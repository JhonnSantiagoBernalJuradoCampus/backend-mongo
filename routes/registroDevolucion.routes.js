import { Router } from "express";
import { getRegistroDevoluciones } from "../controllers/registroDevolucion.controller.js";

const router = Router();

router.get("/", getRegistroDevoluciones);

export default router;