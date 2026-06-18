// Impotar las dependencias necesarias
import express from "express";

// Importar las rutas
import personajesRoutes from "./routes/personajes.routes.js";

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.json());

// Rutas
app.use("/api/personajes", personajesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});