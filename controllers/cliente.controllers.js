import Cliente from "../models/Cliente.js";

const getClientes = async (req,res)=>{

    const clientes = await Cliente.find();

    res.json(clientes);
};

const getClienteId = async (req,res)=>{
    
    const parametro = req.params.id;

    const cliente = await Cliente.find({_id: {$eq: parametro}});

    res.json(cliente);
}

export {getClientes, getClienteId};