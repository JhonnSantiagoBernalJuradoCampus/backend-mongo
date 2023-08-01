import Automovil from "../models/Automovil.js";

const getAutomoviles = async (req,res)=>{

    const automoviles = await Automovil.find();

    res.json(automoviles);
};

export {getAutomoviles};