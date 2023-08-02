import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        ID_Empleado: {
            type: Number,
            required: true
        },
        Nombre: {
            type: String,
            required: true
        },
        Apellido: {
            type: String,
            required: true
        },
        DNI: {
            type: Number,
            required: true
        },
        Direccion: {
            type: String,
            required: true
        },
        Telefono: {
            type: Number,
            required: true
        },
        Cargo: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
);

const Empleado = mongoose.model("Empleados", empleadoSchema);

export default Empleado;