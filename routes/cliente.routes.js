import { Router } from "express";
import { getClientes, getClienteId, postCliente } from "../controllers/cliente.controllers.js";

const router = Router();

router.get("/", getClientes);
router.get("/:id", getClienteId);
router.post("/add", postCliente);

export default router;