import { Router } from "express";
import { getRegistroDevoluciones, getRegistroDevolucionId } from "../controllers/registroDevolucion.controller.js";

const router = Router();

router.get("/", getRegistroDevoluciones);
router.get("/:id", getRegistroDevolucionId);

export default router;