import SucursalAutomovil from "../models/SucursalAutomovil.js";

const getSucursalAutomoviles = async (req,res)=>{

    const sucursales = await SucursalAutomovil.find();

    res.json(sucursales);
};

const getSucursalAutomovilId = async (req,res)=>{

    const parametro = req.params.id;

    const sucuAuto = await SucursalAutomovil.find({_id: {$eq: parametro}});

    res.json(sucuAuto);
};

export {getSucursalAutomoviles, getSucursalAutomovilId};