import RegistroEntregas from "../models/RegistroEntrega.js";

const getRegistroEntregas = async (req,res)=>{

    const registroEntregas = await RegistroEntregas.find();

    res.json(registroEntregas);
};

const getRegistroEntregaId = async (req,res)=>{

    const parametro = req.params.id;

    const entrega = await RegistroEntregas.findOne({_id: parametro});

    res.json(entrega);
};

export {getRegistroEntregas, getRegistroEntregaId};