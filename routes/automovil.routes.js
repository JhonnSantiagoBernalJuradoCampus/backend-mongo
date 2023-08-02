import { Router } from "express";
import { getAutomoviles, getAutomovilId, postAutomovil, putAutomovil } from "../controllers/automovil.controllers.js";

const router = Router();

router.get("/", getAutomoviles);
router.get("/:id", getAutomovilId);
router.post("/add", postAutomovil);
router.put("/upd/:id", putAutomovil);

export default router;