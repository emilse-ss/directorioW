import type {
  Cancion,
  EstadoDeAnimo,
  ResultadoReproduccion,
  FuncionReproduccion,
} from "./tipos.js";

// ---------------------------------------------------------------------
// ordenarPorRareza — orden superior + destructuring
// ---------------------------------------------------------------------
export function ordenarPorRareza(lista: Cancion[]): Cancion[] {
  const prioridad: Record<Cancion["rareza"], number> = {
    single: 1,
    "b-side": 2,
    remix: 3,
    inedita: 4,
  };

  return [...lista].sort((a, b) => {
    const { rareza: rarezaA } = a;
    const { rareza: rarezaB } = b;
    return prioridad[rarezaA] - prioridad[rarezaB];
  });
}

// ---------------------------------------------------------------------
// reproducirPlaylist — async/await
// ---------------------------------------------------------------------
function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function reproducirPlaylist(
  playlist: Cancion[],
  alReproducir: FuncionReproduccion
): Promise<ResultadoReproduccion[]> {
  const resultados: ResultadoReproduccion[] = [];

  for (const cancion of playlist) {
    try {
      await esperar(50);
      if (typeof cancion.bpm !== "number") {
        throw new Error(`"${cancion.titulo}" no tiene un bpm válido`);
      }
      resultados.push({ ok: true, valor: alReproducir(cancion) });
    } catch (error) {
      const mensaje = error instanceof Error ? error.message : "error desconocido";
      resultados.push({ ok: false, mensaje });
    }
  }

  return resultados;
}

// ---------------------------------------------------------------------
// fusionarCanciones — rest + spread
// ---------------------------------------------------------------------
export function fusionarCanciones(tituloNuevo: string, ...pistas: Cancion[]): Cancion {
  const bpmPromedio = Math.round(
    pistas.reduce((suma, p) => suma + p.bpm, 0) / pistas.length
  );
  const energiaMax = Math.max(...pistas.map((p) => p.energia));
  const generosUnicos = [...new Set(pistas.map((p) => p.genero))];

  return {
    titulo: tituloNuevo,
    bpm: bpmPromedio,
    energia: energiaMax,
    genero: generosUnicos.join(" / ") as Cancion["genero"],
    estadoDeAnimo: pistas[0].estadoDeAnimo,
    rareza: "remix",
    duracionSegundos: Math.round(
      pistas.reduce((suma, p) => suma + p.duracionSegundos, 0) / pistas.length
    ),
  };
}

// ---------------------------------------------------------------------
// generarPlaylistPorEstado — filter/sort/slice/map
// ---------------------------------------------------------------------
export function generarPlaylistPorEstado(
  lista: Cancion[],
  estado: EstadoDeAnimo,
  limite: number = 5
): string[] {
  return lista
    .filter((c) => c.estadoDeAnimo === estado)
    .sort((a, b) => b.energia - a.energia)
    .slice(0, limite)
    .map(({ titulo, bpm }) => `${titulo} (${bpm} bpm)`);
}

// ---------------------------------------------------------------------
// filtrarCanciones — para orden superior
// ---------------------------------------------------------------------
export function filtrarCanciones(
  lista: Cancion[],
  criterio: (c: Cancion) => boolean
): Cancion[] {
  return lista.filter(criterio);
}