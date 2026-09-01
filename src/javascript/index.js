import { canciones } from "./canciones.js";
import {
  ordenarPorRareza,
  reproducirPlaylist,
  fusionarCanciones,
  generarPlaylistPorEstado,
} from "./directorio.js";
 
async function main() {
  console.log("=== 1) Catálogo ordenado por rareza ===");
  const ordenadas = ordenarPorRareza(canciones);
  ordenadas.forEach((c) => console.log(`${c.rareza.padEnd(8)} — ${c.titulo}`));
 
  console.log("\n=== 2) Fusionando dos canciones en un remix ===");
  const remix = fusionarCanciones("Headache x Loser at Best", canciones[2], canciones[8]);
  console.log(remix);
 
  console.log("\n=== 3) Playlist por estado de ánimo: 'euforico' ===");
  const playlistEuforica = generarPlaylistPorEstado(canciones, "euforico", 3);
  console.log(playlistEuforica);
 
  console.log("\n=== 4) Reproduciendo playlist (async/await) ===");
  const resultadosReproduccion = await reproducirPlaylist(
    canciones.slice(0, 4),
    (c) => `▶ sonando: ${c.titulo} (${c.bpm} bpm)`
  );
  resultadosReproduccion.forEach((r) =>
    console.log(r.ok ? r.valor : `⚠ ${r.mensaje}`)
  );
}
 
main();