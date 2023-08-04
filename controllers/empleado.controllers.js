import Empleado from "../models/Empleado.js";

const getEmpleados = async (req,res)=>{

    const empleados = await Empleado.find();

    res.json(empleados);
};

const getEmpleadoId = async (req,res)=>{

    const parametro = req.params.id;

    const empleado = await Empleado.findOne({_id: {$eq: parametro}});

    res.json(empleado);
};

const postEmpleado = async (req,res)=>{

    const empleado = await new Empleado(req.body);
    try{
        const nuevoEmpleado = await empleado.save();

        res.status(201).send({message: "Agregado con exito"});
    } catch(error){
        res.send({message: "Error al agregar"});
    }
}

export {getEmpleados, getEmpleadoId, postEmpleado};