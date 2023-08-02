import mongoose from "mongoose";

const registroDevolucionSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        ID_Registro: {
            type: Number,
            required: true
        },
        alquiler_id: {
            type: Number,
            required: true
        },
        empleado_id: {
            type: Number,
            required: true
        },
        Fecha_Devolucion: {
            type: String,
            required: true
        },
        Combustible_Devuelto: {
            type: String,
            required: true
        },
        Kilometraje_Devuelto: {
            type: Number,
            required: true
        },
        Monto_Adicional: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
);

const RegistroDevoluciones = mongoose.model("Registro_devoluciones", registroDevolucionSchema);

export default RegistroDevoluciones;