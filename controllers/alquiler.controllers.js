import Alquiler from "../models/Alquiler.js";

const getAlquileres = async (req,res)=>{

    const alquileres = await Alquiler.find();

    res.json(alquileres);
};

export {getAlquileres}