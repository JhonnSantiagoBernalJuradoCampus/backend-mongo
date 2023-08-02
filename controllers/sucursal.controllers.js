import Sucursal from "../models/Sucursal.js";

const getSucursales = async (req,res) =>{

    const sucursales = await Sucursal.find();

    res.json(sucursales);
};

const getSucursalId = async (req,res)=>{

    const parametro = req.params.id;

    const sucursal = await Sucursal.find({_id: {$eq: parametro}});

    res.json(sucursal);
};

export {getSucursales, getSucursalId};