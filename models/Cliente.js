import mongoose from "mongoose";

const clienteSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        ID_Cliente: {
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
        Email: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Cliente = mongoose.model("Clientes", clienteSchema);

export default Cliente;