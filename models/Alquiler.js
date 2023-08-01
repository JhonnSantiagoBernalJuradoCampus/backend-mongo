import mongoose from "mongoose";

const alquilerSchema = mongoose.Schema(
    {   
        _id:{
            type: Number,
            required: true
        },
        ID_Alquiler: {
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
        Fecha_Inicio: {
            type: String,
            required: true,
            trim: true
        },
        Fecha_Fin: {
            type: String,
            required: true,
            trim: true
        },
        Costo_Total: {
            type: String,
            required: true,
            trim: true
        },
        Estado: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true
    }
);

const Alquiler = mongoose.model("Alquileres", alquilerSchema);

export default Alquiler;