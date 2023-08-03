import Automovil from "../models/Automovil.js";

const getAutomoviles = async (req,res)=>{

    const automoviles = await Automovil.find();

    res.json(automoviles);
};

const getAutomovilId = async (req,res)=>{

    const parametro = req.params.id;

    const automovil = await Automovil.findOne({_id: {$eq: parametro}});

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
};

const putAutomovil = async (req,res)=>{
    try {
        const automovil = await Automovil.findOne({_id: req.params.id});

        if(req.body.Marca){
            automovil.Marca = req.body.Marca
        }
        if(req.body.Modelo){
            automovil.Modelo = req.body.Modelo
        }
        if(req.body.Anio){
            automovil.Anio = req.body.Anio
        }
        if(req.body.Tipo){
            automovil.Tipo = req.body.Tipo
        }
        if(req.body.Capacidad){
            automovil.Capacidad = req.body.Capacidad
        }
        if(req.body.Precio_Diario) {
            automovil.Precio_Diario = req.body.Precio_Diario
        }
        await automovil.save();
        res.status(201).send({message: "Actualizado con exito"})
    } catch (error) {
        res.status(404).send({message: "automovil no existe"});
    }
}

const deleteAutomovil = async (req,res)=>{
    try {
        await Automovil.deleteOne({_id: req.params.id});

        res.status(202).send({message: "Eliminado correctamente"})
    } catch (error) {
        res.status(404).send({message: error});
    }
}

export {getAutomoviles, getAutomovilId, postAutomovil, putAutomovil, deleteAutomovil};