import mongoose from "mongoose";

const reservaSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        ID_Reserva: {
            type: Number,
            required: true
        },
        cliente_id: {
            type: Number,
            required: true
        },
        automovil_id: {
            type: Number,
            required: true
        },
        Fecha_Reserva: {
            type: String,
            required: true
        },
        Fecha_Inicio: {
            type: String,
            required: true
        },
        Fecha_Fin: {
            type: String,
            required: true
        },
        Estado: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Reserva = mongoose.model("Reservas", reservaSchema);

export default Reserva;