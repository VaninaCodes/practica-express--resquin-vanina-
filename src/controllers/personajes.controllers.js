// Importa el array de personajes
import {personajes} from '../data/personajes.js';

// Obtiene todos los personajes
export const getPersonajes = (req, res) => {
    res.status(200).json(personajes);
};

// Obtiene un personaje por su ID
export const getPersonajePorId = (req, res) => {

    // Valida que el ID sea un número válido
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: "El ID debe ser un número válido" });
    }

    // Busca el personaje por su ID
    const personaje = personajes.find((p) => p.id === id);
    if (!personaje) {
        return res.status(404).json({ error: "Personaje no encontrado" });
    }
    res.status(200).json(personaje);
};

// Crea un nuevo personaje
export const crearPersonaje = (req, res) => {
    // Valida los campos
    const { nombre, imagen } = req.body;
    if (!nombre || !nombre.trim() || !imagen || !imagen.trim()) {
        return res.status(400).json({ error: "El nombre y la imagen son obligatorios" });
    }

    // Crea el nuevo ID
    const nuevoId = personajes.length > 0 ? Math.max(...personajes.map((p) => p.id)) + 1 : 1;
    
    // Crea el nuevo personaje
    const nuevoPersonaje = { id: nuevoId, nombre, imagen };
    
    // Agrega el nuevo personaje al array
    personajes.push(nuevoPersonaje);
    
    // Responde con el nuevo personaje creado
    res.status(201).json(nuevoPersonaje);
}

// Modifica un personaje
export const actualizarPersonaje = (req, res) => {
    // Valida que el ID sea un número válido
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: "El ID debe ser un número válido" });
    }

    // Busca el personaje por su ID
    const personaje = personajes.find((p) => p.id === id);
    if (!personaje) {
        return res.status(404).json({ error: "Personaje no encontrado" });
    }

    // Valida los campos a modificar
    const cambios = req.body;
    if (!cambios || Object.keys(cambios).length === 0) {
        return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
    }

    // Valida que los campos no estén vacíos
    for (const campo in cambios){
        if (typeof cambios[campo] === "string" && cambios[campo].trim() === "") {
            return res.status(400).json({ error: `El campo ${campo} no puede estar vacío` });
        }
    }

    // Actualiza el personaje con los cambios
    Object.assign(personaje, cambios);

    // Responde con el personaje actualizado
    res.status(200).json(personaje);
};

// Elimina un personaje
export const eliminarPersonaje = (req, res) => {
    // Valida que el ID sea un número válido
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: "El ID debe ser un número válido" });
    }

    // Busca el personaje por su ID
    const index = personajes.findIndex((p) => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Personaje no encontrado" });
    }

    const [eliminado] = personajes.splice(index, 1);
    res.status(200).json({mesaje: "Personaje eliminado", personaje: eliminado});
}