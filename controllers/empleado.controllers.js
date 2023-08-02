import Empleado from "../models/Empleado.js";

const getEmpleados = async (req,res)=>{

    const empleados = await Empleado.find();

    res.json(empleados);
};

const getEmpleadoId = async (req,res)=>{

    const parametro = req.params.id;

    const empleado = await Empleado.find({_id: {$eq: parametro}});

    res.json(empleado);
};

export {getEmpleados, getEmpleadoId};