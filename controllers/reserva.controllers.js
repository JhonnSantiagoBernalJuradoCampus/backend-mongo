import Reserva from "../models/Reserva.js";

const getReservas = async (req,res)=>{

    const reservas = await Reserva.find();

    res.json(reservas);
};

const getReservaId = async (req,res)=>{

    const parametro = req.params.id;

    const reserva = await Reserva.findOne({_id: {$eq: parametro}});
    
    res.json(reserva);
};

export {getReservas, getReservaId};