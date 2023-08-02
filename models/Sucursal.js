import mongoose from "mongoose";

const sucursalSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        ID_sucursal: {
            type: Number,
            required: true
        },
        Nombre: {
            type: String,
            required: true
        },
        Direccion: {
            type: String,
            required: true
        },
        Telefono: {
            type: Number,
            required: true
        }
    },
    {
        versionKey: false
    }
);

const Sucursal = mongoose.model("Sucursales", sucursalSchema);

export default Sucursal;