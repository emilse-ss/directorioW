"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canciones_js_1 = require("./canciones.js");
const directorio_js_1 = require("./directorio.js");
async function main() {
    console.log("=== 1) Catálogo ordenado por rareza ===");
    const ordenadas = (0, directorio_js_1.ordenarPorRareza)(canciones_js_1.canciones);
    ordenadas.forEach((c) => console.log(`${c.rareza.padEnd(8)} — ${c.titulo}`));
    console.log("\n=== 2) Fusionando dos canciones en un remix ===");
    const remix = (0, directorio_js_1.fusionarCanciones)("Headache x Loser at Best", canciones_js_1.canciones[2], canciones_js_1.canciones[8]);
    console.log(remix);
    console.log("\n=== 3) Playlist por estado de ánimo: 'euforico' ===");
    const playlistEuforica = (0, directorio_js_1.generarPlaylistPorEstado)(canciones_js_1.canciones, "euforico", 3);
    console.log(playlistEuforica);
    console.log("\n=== 4) Reproduciendo playlist (async/await) ===");
    const resultadosReproduccion = await (0, directorio_js_1.reproducirPlaylist)(canciones_js_1.canciones.slice(0, 4), (c) => `▶ sonando: ${c.titulo} (${c.bpm} bpm)`);
    resultadosReproduccion.forEach((r) => console.log(r.ok ? r.valor : `⚠ ${r.mensaje}`));
}
main();
//# sourceMappingURL=index.js.map