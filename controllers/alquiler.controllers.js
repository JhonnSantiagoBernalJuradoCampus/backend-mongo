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

const postAlquiler = async (req,res)=>{

    const alquiler = new Alquiler(req.body);

    try{
        const nuevoAlquiler = await alquiler.save();

        res.json(nuevoAlquiler);
    }catch (error){
        console.log(error);
    }
}

export {getAlquileres, getAlquilerId, postAlquiler};