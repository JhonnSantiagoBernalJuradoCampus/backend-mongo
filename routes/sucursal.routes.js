import { Router } from "express";
import { getSucursales } from "../controllers/sucursal.controllers.js";

const router = Router();

router.get("/", getSucursales);

export default router;