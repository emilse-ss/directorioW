# Directorio musical: Wallice

## Descripción
Directorio de mi artista favorita: Wallice.Produce combinaciones y playlists..

## Criterios de aceptación
- generarPlaylistPorEstado nunca retorna más canciones que el límite solicitado, y las ordena por energía descendente.
- reproducirPlaylist procesa toda la playlist aunque alguna canción tenga datos inválidos, reportando el error de esa canción sin detener el resto (no bloqueante).
- La versión TypeScript rechaza en tiempo de compilación cualquier genero, estadoDeAnimo o rareza que no pertenezca a su unión literal correspondiente.
