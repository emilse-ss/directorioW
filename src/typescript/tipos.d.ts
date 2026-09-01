export type Genero = "indie pop" | "alt-rock" | "bedroom pop" | "fuzzy pop" | "indie rock" | "synth pop" | "alt-pop";
export type EstadoDeAnimo = "melancolico" | "nostalgico" | "euforico" | "sereno";
export type Rareza = "single" | "b-side" | "remix" | "inedita";
export interface Cancion {
    titulo: string;
    duracionSegundos: number;
    bpm: number;
    genero: Genero;
    estadoDeAnimo: EstadoDeAnimo;
    energia: number;
    rareza: Rareza;
}
export type ResultadoReproduccion = {
    ok: true;
    valor: string;
} | {
    ok: false;
    mensaje: string;
};
export type FuncionReproduccion = (cancion: Cancion) => string;
//# sourceMappingURL=tipos.d.ts.map