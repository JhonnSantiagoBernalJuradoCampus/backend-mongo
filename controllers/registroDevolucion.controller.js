import RegistroDevoluciones from "../models/RegistroDevolucion.js";

const getRegistroDevoluciones = async (req,res)=>{

    const registrosDevoluciones = await RegistroDevoluciones.find();

    res.json(registrosDevoluciones);
};

const getRegistroDevolucionId = async (req,res)=>{

    const parametro = req.params.id;

    const registroDevolucion = await RegistroDevoluciones.find({_id: {$eq: parametro}});

    res.json(registroDevolucion);
};

export {getRegistroDevoluciones, getRegistroDevolucionId};