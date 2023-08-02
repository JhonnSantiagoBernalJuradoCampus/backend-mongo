import { Router } from "express";
import { getAlquileres, getAlquilerId, postAlquiler } from "../controllers/alquiler.controllers.js";

const router = Router();

router.get("/", getAlquileres);
router.get("/:id", getAlquilerId);
router.post("/add", postAlquiler);

export default router;