import { Router } from "express";
import { getClientes } from "../controllers/cliente.controllers.js";

const router = Router();

router.get("/", getClientes);

export default router;