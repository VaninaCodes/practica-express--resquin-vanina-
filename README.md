# Práctica Express - API de Personajes

API REST desarrollada con Node.js y Express para gestionar un listado de personajes.

El servidor corre en `http://localhost:3000`.

## Endpoints

- `GET /api/personajes` — Lista todos los personajes
- `GET /api/personajes/:id` — Obtiene un personaje por ID
- `POST /api/personajes` — Crea un personaje nuevo (body: `nombre`, `imagen`)
- `PUT /api/personajes/:id` — Actualiza un personaje existente
- `DELETE /api/personajes/:id` — Elimina un personaje
