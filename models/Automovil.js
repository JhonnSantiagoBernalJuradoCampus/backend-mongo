import mongoose from "mongoose";

const automovilSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        ID_Automovil: {
            type: Number,
            required: true
        },
        Marca: {
            type: String,
            required: true,
            trim: true
        },
        Anio: {
            type: Number,
            required: true
        },
        Tipo: {
            type: String,
            required: true,
            trim: true
        },
        Capacidad: {
            type: String,
            required: true,
        },
        Precio_Diario: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Automovil = mongoose.model("Automoviles", automovilSchema);

export default Automovil;