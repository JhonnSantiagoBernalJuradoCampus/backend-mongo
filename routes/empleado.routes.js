import { Router } from "express";
import { getEmpleados, getEmpleadoId } from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", getEmpleados);
router.get("/:id", getEmpleadoId);

export default router;