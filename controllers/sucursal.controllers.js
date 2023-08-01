import Sucursal from "../models/Sucursal.js";

const getSucursales = async (req,res) =>{

    const sucursales = await Sucursal.find();

    res.json(sucursales);
};

export {getSucursales};