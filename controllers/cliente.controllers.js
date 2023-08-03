import Cliente from "../models/Cliente.js";

const getClientes = async (req,res)=>{

    const clientes = await Cliente.find();

    res.json(clientes);
};

const getClienteId = async (req,res)=>{
    
    const parametro = req.params.id;

    const cliente = await Cliente.findOne({_id: {$eq: parametro}});

    res.json(cliente);
}

const postCliente = async (req,res)=>{
    
    const cliente = await new Cliente(req.body)
    try {
        const nuevoCliente = await cliente.save();

        res.status(201).send({message: "Agregado con exito"});
    } catch (error) {
        res.send({message: "Error al agregar"});
    }
};

export {getClientes, getClienteId, postCliente};