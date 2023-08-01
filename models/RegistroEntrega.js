import mongoose from "mongoose";

const registroEntregaSchema = mongoose.Schema(
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
        Fecha_Entrega: {
            type: String,
            required: true
        },
        Combustible_Entregado: {
            type: String,
            required: true
        },
        Kilometraje_Entregado: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const RegistroEntregas = mongoose.model("Registro_entregas", registroEntregaSchema);

export default RegistroEntregas;