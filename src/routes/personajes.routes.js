// Importar el router de Express
import {Router} from 'express';

// Importar las funciones del controlador
import {
    getPersonajes,
    getPersonajePorId,
    crearPersonaje,
    actualizarPersonaje,
    eliminarPersonaje
} from '../controllers/personajes.controllers.js';

// Crea una instancia del router
const router = Router();

// Define las rutas para los personajes
router.get("/", getPersonajes);
router.get("/:id", getPersonajePorId);
router.post("/", crearPersonaje);
router.put("/:id", actualizarPersonaje);
router.delete("/:id", eliminarPersonaje);

// Exporta el router 
export default router;