import { Router } from "express";
import { getClientes, getClienteId } from "../controllers/cliente.controllers.js";

const router = Router();

router.get("/", getClientes);
router.get("/:id", getClienteId);

export default router;