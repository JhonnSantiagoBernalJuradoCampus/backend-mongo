import { Router } from "express";
import { getAutomoviles, getAutomovilId } from "../controllers/automovil.controllers.js";

const router = Router();

router.get("/", getAutomoviles);
router.get("/:id", getAutomovilId);

export default router;