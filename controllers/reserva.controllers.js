import Reserva from "../models/Reserva.js";

const getReservas = async (req,res)=>{

    const reservas = await Reserva.find();

    res.json(reservas);
};

export {getReservas};