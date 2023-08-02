import { Router } from "express";
import { getAlquileres, getAlquilerId } from "../controllers/alquiler.controllers.js";

const router = Router();

router.get("/", getAlquileres);
router.get("/:id", getAlquilerId);

export default router;