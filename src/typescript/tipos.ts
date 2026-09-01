// Formas de datos y estados permitidos del directorio musical.
export type Genero =
  | "indie pop"
  | "alt-rock"
  | "bedroom pop"
  | "fuzzy pop"
  | "indie rock"
  | "synth pop"
  | "alt-pop";
 
export type EstadoDeAnimo = "melancolico" | "nostalgico" | "euforico" | "sereno";
 
export type Rareza = "single" | "b-side" | "remix" | "inedita";
 
// --- Forma de una canción ---
export interface Cancion {
  titulo: string;
  duracionSegundos: number;
  bpm: number;
  genero: Genero;
  estadoDeAnimo: EstadoDeAnimo;
  energia: number;
  rareza: Rareza;
}

//para reproducir una canción
export type ResultadoReproduccion =
  | { ok: true; valor: string }
  | { ok: false; mensaje: string };

//para reproducir Playlist
export type FuncionReproduccion = (cancion: Cancion) => string;