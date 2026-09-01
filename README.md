# Directorio musical: Wallice

## Descripción
Directorio de mi artista favorita: Wallice.Produce combinaciones y playlists..

## Criterios de aceptación
- generarPlaylistPorEstado nunca retorna más canciones que el límite solicitado, y las ordena por energía descendente.
- reproducirPlaylist procesa toda la playlist aunque alguna canción tenga datos inválidos, reportando el error de esa canción sin detener el resto (no bloqueante).
- La versión TypeScript rechaza en tiempo de compilación cualquier genero, estadoDeAnimo o rareza que no pertenezca a su unión literal correspondiente.

## Tipos utilizados
- Genero: unión literal que restringe el campo genero a un conjunto cerrado de subgéneros válidos.
- EstadoDeAnimo: unión literal que define los únicos estados de ánimo aceptados (melancolico, nostalgico, euforico, sereno).
- Rareza: unión literal que controla los valores posibles del campo rareza (single, b-side, remix, inedita).
- Cancion: interface que define la forma completa de cada canción del catálogo.
- ResultadoReproduccion: type con unión discriminada que representa el resultado de reproducir una canción, ya sea éxito o diagnóstico de error.
