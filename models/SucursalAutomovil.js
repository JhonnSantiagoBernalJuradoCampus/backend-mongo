import mongoose from "mongoose";

const sucursalAutomovilSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        sucursal_id: {
            type: Number,
            required: true
        },
        automovil_id: {
            type: Number,
            required: true
        },
        Cantidad_Disponible: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const SucursalAutomovil = mongoose.model("Sucursal_automoviles", sucursalAutomovilSchema);

export default SucursalAutomovil;