//---orden superior + destructuring: 
//Ordena el catálogo según una prioridad definida para cada rareza
export function ordenarPorRareza(lista) {
  const prioridad = { single: 1, "b-side": 2, remix: 3, inedita: 4 };
 
  return [...lista].sort((a, b) => {
    const { rareza: rarezaA } = a;
    const { rareza: rarezaB } = b;
    return prioridad[rarezaA] - prioridad[rarezaB];
  });
}

//---orden superior:
//Genera una playlsit filtrada por estado de ánimo, va descendiendo de energía y se limita a n canciones
export function generarPlaylistPorEstado(lista, estado, limite = 5) {
  return lista
    .filter((c) => c.estadoDeAnimo === estado)
    .sort((a, b) => b.energia - a.energia)
    .slice(0, limite)
    .map(({ titulo, bpm }) => `${titulo} (${bpm} bpm)`);
}

//---async/await:
//Simula reproducir cada canción
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 
export async function reproducirPlaylist(playlist, alReproducir) {
  const resultados = [];
 
  for (const cancion of playlist) {
    try {
      await esperar(50);
      if (typeof cancion.bpm !== "number") {
        throw new Error(`"${cancion.titulo}" no tiene un bpm válido`);
      }
      resultados.push({ ok: true, valor: alReproducir(cancion) });
    } catch (error) {
      resultados.push({ ok: false, mensaje: error.message });
    }
  }
 
  return resultados;
}

//---spread/rest:
//Combina dos o más canciones con bpm promedio
export function fusionarCanciones(tituloNuevo, ...pistas) {
  const bpmPromedio = Math.round(
    pistas.reduce((suma, p) => suma + p.bpm, 0) / pistas.length
  );
  const energiaMax = Math.max(...pistas.map((p) => p.energia));
  const generosUnicos = [...new Set(pistas.map((p) => p.genero))];

  return {
    titulo: tituloNuevo,
    bpm: bpmPromedio,
    energia: energiaMax,
    genero: generosUnicos.join(" / "),
    estadoDeAnimo: pistas[0].estadoDeAnimo,
    rareza: "remix",
  };
}