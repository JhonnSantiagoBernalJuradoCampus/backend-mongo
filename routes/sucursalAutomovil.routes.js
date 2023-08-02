import { Router } from "express";
import { getSucursalAutomoviles, getSucursalAutomovilId } from "../controllers/sucursalAutomovil.controllers.js";

const router = Router();

router.get("/", getSucursalAutomoviles);
router.get("/:id", getSucursalAutomovilId);

export default router;