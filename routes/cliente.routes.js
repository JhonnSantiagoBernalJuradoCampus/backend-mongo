import { Router } from "express";
import { getClientes, getClienteId, postCliente, putCliente } from "../controllers/cliente.controllers.js";

const router = Router();

router.get("/", getClientes);
router.get("/:id", getClienteId);
router.post("/add", postCliente);
router.put("/upd/:id", putCliente);

export default router;