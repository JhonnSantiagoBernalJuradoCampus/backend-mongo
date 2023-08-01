import RegistroEntregas from "../models/RegistroEntrega.js";

const getRegistroEntregas = async (req,res)=>{

    const registroEntregas = await RegistroEntregas.find();

    res.json(registroEntregas);
};

export {getRegistroEntregas};