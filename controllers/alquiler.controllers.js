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

const putAlquiler = async (req,res)=>{
    try {
        const alquiler = await Alquiler.findOne({_id: req.params.id});
        if(req.body.cliente_id){
            alquiler.cliente_id = req.body.cliente_id;
        }
        if(req.body.automovil_id){
            alquiler.automovil_id = req.body.automovil_id;
        }
        if(req.body.Fecha_Inicio){
            alquiler.Fecha_Inicio = req.body.Fecha_Inicio;
        }
        if(req.body.Fecha_Fin){
            alquiler.Fecha_Fin = req.body.Fecha_Fin;
        }
        if(req.body.Costo_Total){
            alquiler.Costo_Total = req.body.Costo_Total;
        }
        if(req.body.Estado){
            alquiler.Estado = req.body.Estado;
        }
        alquiler.save()

        res.send({message: "Actualizado con exito"});
    } catch (error) {
        res.status(404).send({message: "alquiler no existe"});
    }
}

const deleteAlquiler = async (req,res)=>{
    try {
        const parametro = req.params.id;
        await Alquiler.deleteOne({_id: {$eq: parametro}});
        
        res.status(202).send({message: `Eliminado correctamente`});
    } catch (error) {
        res.status(404).send({message: error});
    }
};

export {getAlquileres, getAlquilerId, postAlquiler, putAlquiler, deleteAlquiler};