import SucursalAutomovil from "../models/SucursalAutomovil.js";

const getSucursalAutomoviles = async (req,res)=>{

    const sucursales = await SucursalAutomovil.find();

    res.json(sucursales);
};

export {getSucursalAutomoviles};