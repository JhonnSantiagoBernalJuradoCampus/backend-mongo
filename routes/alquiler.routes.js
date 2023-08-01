import { Router } from "express";
import { getAlquileres } from "../controllers/alquiler.controllers.js";

const router = Router();

router.get("/", getAlquileres);

export default router;