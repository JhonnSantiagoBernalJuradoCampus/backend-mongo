import { Router } from "express";
import { getSucursalAutomoviles } from "../controllers/sucursalAutomovil.controllers.js";

const router = Router();

router.get("/", getSucursalAutomoviles);

export default router;