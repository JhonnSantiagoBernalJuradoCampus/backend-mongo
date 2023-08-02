import { Router } from "express";
import { getAlquileres, getAlquilerId, postAlquiler, putAlquiler, deleteAlquiler } from "../controllers/alquiler.controllers.js";

const router = Router();

router.get("/", getAlquileres);
router.get("/:id", getAlquilerId);
router.post("/add", postAlquiler);
router.put("/upd/:id", putAlquiler);
router.delete("/delete/:id", deleteAlquiler);

export default router;