import type { Cancion, EstadoDeAnimo, ResultadoReproduccion, FuncionReproduccion } from "./tipos.js";
export declare function ordenarPorRareza(lista: Cancion[]): Cancion[];
export declare function reproducirPlaylist(playlist: Cancion[], alReproducir: FuncionReproduccion): Promise<ResultadoReproduccion[]>;
export declare function fusionarCanciones(tituloNuevo: string, ...pistas: Cancion[]): Cancion;
export declare function generarPlaylistPorEstado(lista: Cancion[], estado: EstadoDeAnimo, limite?: number): string[];
export declare function filtrarCanciones(lista: Cancion[], criterio: (c: Cancion) => boolean): Cancion[];
//# sourceMappingURL=directorio.d.ts.map