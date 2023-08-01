import RegistroDevoluciones from "../models/RegistroDevolucion.js";

const getRegistroDevoluciones = async (req,res)=>{

    const registrosDevoluciones = await RegistroDevoluciones.find();

    res.json(registrosDevoluciones);
};

export {getRegistroDevoluciones};