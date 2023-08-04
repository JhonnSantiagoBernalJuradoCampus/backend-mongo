import { Router } from "express";
import { getEmpleados, getEmpleadoId, postEmpleado } from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", getEmpleados);
router.get("/:id", getEmpleadoId);
router.post("/add", postEmpleado);

export default router;