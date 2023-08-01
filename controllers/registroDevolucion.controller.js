import RegistroDevoluciones from "../models/RegistroDevoluciones.js";

const getRegistroDevoluciones = async (req,res)=>{

    const registrosDevoluciones = await RegistroDevoluciones.find();

    res.json(registrosDevoluciones);
};

export {getRegistroDevoluciones};