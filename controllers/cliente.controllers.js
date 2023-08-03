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

const putCliente = async (req,res)=>{
    try {
        const cliente = await Cliente.findOne({_id: req.params.id});
        if(req.body.Direccion){
            cliente.Direccion = req.body.Direccion;
        }
        if(req.body.Telefono){
            cliente.Telefono = req.body.Telefono;
        }
        if(req.body.Email){
            cliente.Email = req.body.Email;
        }
        await cliente.save();
        res.status(201).send({message: "Actualizado con exito"})
    } catch (error) {
        res.status(404).send({error: "cliente no existe"})
    }
}

export {getClientes, getClienteId, postCliente, putCliente};