import Empleado from "../models/Empleado.js";

const getEmpleados = async (req,res)=>{

    const empleados = await Empleado.find();

    res.json(empleados);
};

export {getEmpleados};