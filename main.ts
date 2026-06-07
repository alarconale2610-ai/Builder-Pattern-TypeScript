/**
 * PUNTO DE ENTRADA: main.ts
 * ─────────────────────────────────────────────────────────────
 * Este archivo es el CLIENTE — el código que usa el patrón Builder.
 *
 * El cliente tiene tres responsabilidades:
 *   1. Crear el builder concreto que necesita
 *   2. (Opcional) Pasárselo al Director para que ejecute una receta
 *   3. Recoger el producto terminado del builder
 *
 * Notar que el cliente NUNCA construye la casa o el auto directamente.
 * Solo elige el builder, delega al director y recoge el resultado.
 */

import { CasaDeMaderaBuilder } from "./casas/CasaDeMaderaBuilder";
import { CasaDeDiamanteBuilder } from "./casas/CasaDeDiamanteBuilder";
import { DirectorDeCasas } from "./casas/DirectorDeCasas";
import { CocheBuilder } from "./autos/CocheBuilder";
import { ManualBuilder } from "./autos/ManualBuilder";
import { DirectorDeVehiculos } from "./autos/DirectorDeVehiculos";

// ══════════════════════════════════════════════════════════════
// EJEMPLO 1: BUILDER DE CASAS
// ══════════════════════════════════════════════════════════════
console.log("=".repeat(50));
console.log("EJEMPLO 1: BUILDER DE CASAS");
console.log("=".repeat(50));

// El director es un objeto independiente y reutilizable.
// No sabe nada de materiales — solo conoce las recetas.
const directorCasas = new DirectorDeCasas();

// ── Cabaña de madera ──
// 1. Elegimos el builder concreto
const builderMadera = new CasaDeMaderaBuilder();
// 2. Lo "enchufamos" al director con setBuilder()
directorCasas.setBuilder(builderMadera);
// 3. El director ejecuta la receta sobre el builder
directorCasas.construirCabana();
// 4. El cliente recoge el resultado directamente del builder
const cabana = builderMadera.obtenerCasa();
cabana.describir();

console.log();

// ── Mansión de diamante ──
// Mismo director, distinto builder → resultado completamente diferente
const builderDiamante = new CasaDeDiamanteBuilder();
directorCasas.setBuilder(builderDiamante);  // cambiamos el builder
directorCasas.construirMansion();           // misma receta que antes
const mansion = builderDiamante.obtenerCasa();
mansion.describir();

console.log();

// ── Casa personalizada (sin director) ──
// El cliente también puede controlar cada paso manualmente,
// sin pasar por el director. Útil para configuraciones únicas.
// El encadenamiento (return this) hace el código muy legible.
const casaPersonalizada = new CasaDeMaderaBuilder()
  .construirParedes()
  .construirTecho()
  .agregarPuertas(3)
  .agregarVentanas(8)
  .agregarJardin()
  .obtenerCasa();

console.log("🏡 Casa personalizada (sin director):");
casaPersonalizada.describir();


// ══════════════════════════════════════════════════════════════
// EJEMPLO 2: BUILDER DE AUTOS Y MANUAL
// ══════════════════════════════════════════════════════════════
console.log();
console.log("=".repeat(50));
console.log("EJEMPLO 2: BUILDER DE AUTOS Y MANUAL");
console.log("=".repeat(50));

const directorVehiculos = new DirectorDeVehiculos();

// Creamos los dos builders: uno produce metal, el otro papel
const cocheBuilder = new CocheBuilder();
const manualBuilder = new ManualBuilder();

// ── Mismo director, misma receta, dos builders distintos ──
// El director ejecuta exactamente los mismos pasos en ambos casos
directorVehiculos.construirCocheSuperDeportivo(cocheBuilder);
directorVehiculos.construirCocheSuperDeportivo(manualBuilder);

// Como Coche y ManualDeCoche no comparten interfaz,
// el cliente recoge el resultado de cada builder específico.
// El director NO puede devolver el producto — no sabe qué tipo es.
const cocheDeportivo = cocheBuilder.obtenerCoche();
cocheDeportivo.describir();

console.log();

const manualDeportivo = manualBuilder.obtenerManual();
manualDeportivo.describir();

console.log();

// ── Coche familiar ──
const cocheFamiliarBuilder = new CocheBuilder();
directorVehiculos.construirCocheFamiliar(cocheFamiliarBuilder);
cocheFamiliarBuilder.obtenerCoche().describir();