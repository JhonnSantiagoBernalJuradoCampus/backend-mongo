import { Router } from "express";
import { getReservas, getReservaId } from "../controllers/reserva.controllers.js";

const router = Router();

router.get("/", getReservas);
router.get("/:id", getReservaId);

export default router;