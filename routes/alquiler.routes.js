import { Router } from "express";
import { getAlquileres, getAlquilerId, postAlquiler, deleteAlquiler } from "../controllers/alquiler.controllers.js";

const router = Router();

router.get("/", getAlquileres);
router.get("/:id", getAlquilerId);
router.post("/add", postAlquiler);
router.delete("/delete/:id", deleteAlquiler);

export default router;