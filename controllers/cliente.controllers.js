import Cliente from "../models/Cliente.js";

const getClientes = async (req,res)=>{

    const clientes = await Cliente.find();

    res.json(clientes);
};

export {getClientes};