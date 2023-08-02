import { Router } from "express";
import { getAutomoviles, getAutomovilId, postAutomovil, putAutomovil, deleteAutomovil } from "../controllers/automovil.controllers.js";

const router = Router();

router.get("/", getAutomoviles);
router.get("/:id", getAutomovilId);
router.post("/add", postAutomovil);
router.put("/upd/:id", putAutomovil);
router.delete("/delete/:id", deleteAutomovil);

export default router;