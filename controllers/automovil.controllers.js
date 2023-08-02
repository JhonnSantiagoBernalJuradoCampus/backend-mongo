import Automovil from "../models/Automovil.js";

const getAutomoviles = async (req,res)=>{

    const automoviles = await Automovil.find();

    res.json(automoviles);
};

const getAutomovilId = async (req,res)=>{

    const parametro = req.params.id;

    const automovil = await Automovil.find({_id: {$eq: parametro}});

    res.json(automovil);
};

const postAutomovil = async (req,res)=>{

    const automovil = await new Automovil(req.body);

    try {
        const nuevoAutomovil = await automovil.save();

        res.status(201).send({message: "Agregado con exito"})
    } catch (error) {
        res.send({message: "Error al subir dato"})
    }
}

export {getAutomoviles, getAutomovilId, postAutomovil};