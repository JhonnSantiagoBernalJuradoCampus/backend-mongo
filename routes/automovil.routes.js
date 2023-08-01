import { Router } from "express";
import { getAutomoviles } from "../controllers/automovil.controllers.js";

const router = Router();

router.get("/", getAutomoviles);

export default router;