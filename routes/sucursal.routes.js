import { Router } from "express";
import { getSucursales, getSucursalId } from "../controllers/sucursal.controllers.js";

const router = Router();

router.get("/", getSucursales);
router.get("/:id", getSucursalId);

export default router;