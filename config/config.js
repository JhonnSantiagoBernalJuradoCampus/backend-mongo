import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const conectarDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        const url = `Conectado a Mongo DB en el server: ${connectionDB.connection.host} - En puerto: ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};
export default conectarDB;