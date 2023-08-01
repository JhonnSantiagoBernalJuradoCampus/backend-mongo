import { Router } from "express";
import { getReservas } from "../controllers/reserva.controllers.js";

const router = Router();

router.get("/", getReservas);

export default router;