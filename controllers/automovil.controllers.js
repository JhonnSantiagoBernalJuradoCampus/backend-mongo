import Automovil from "../models/Automovil.js";

const getAutomoviles = async (req,res)=>{

    const automoviles = await Automovil.find();

    res.json(automoviles);
};

const getAutomovilId = async (req,res)=>{

    const parametro = req.params.id;

    const automovil = await Automovil.find({_id: {$eq: parametro}});

    res.json(automovil);
}

export {getAutomoviles, getAutomovilId};