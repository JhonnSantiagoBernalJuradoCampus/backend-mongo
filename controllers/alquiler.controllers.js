import Alquiler from "../models/Alquiler.js";

const getAlquileres = async (req,res)=>{

    const alquileres = await Alquiler.find();

    res.json(alquileres);
};

const getAlquilerId = async (req,res)=>{

    const parametro = req.params.id;
    
    const alquiler = await Alquiler.find({_id: {$eq: parametro}});

    res.json(alquiler);
}

export {getAlquileres, getAlquilerId}