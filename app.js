// Impotar las dependencias necesarias
import express from "express";

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.json());

// Rutas
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});