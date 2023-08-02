import { Router } from "express";
import { getAutomoviles, getAutomovilId, postAutomovil } from "../controllers/automovil.controllers.js";

const router = Router();

router.get("/", getAutomoviles);
router.get("/:id", getAutomovilId);
router.post("/add", postAutomovil);

export default router;