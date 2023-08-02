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

        res.status(201).send({message: "Agregado con exito"});
    }catch (error){
        res.send({message: "Error al subir dato"})
    }
}

const deleteAlquiler = async (req,res)=>{
    try {
        const parametro = req.params.id;
        await Alquiler.deleteOne({_id: {$eq: parametro}});
        
        res.status(204).send({message: `Eliminado correctamente`});
    } catch (error) {
        res.status(404).send({message: error});
    }
};

export {getAlquileres, getAlquilerId, postAlquiler, deleteAlquiler};