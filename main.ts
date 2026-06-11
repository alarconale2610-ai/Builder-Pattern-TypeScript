// ╔══════════════════════════════════════════════════════════════════╗
// ║  ARCHIVO 7 — main.ts                                             ║
// ║  ROL EN EL PATRÓN: CLIENTE (quien orquesta todo)                 ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// EL CLIENTE TIENE EXACTAMENTE 3 RESPONSABILIDADES:
// ───────────────────────────────────────────────────
//   1. Crear el builder concreto que necesita
//   2. (Opcional) Pasárselo al Director para que ejecute una receta
//   3. Recoger el producto terminado del builder
//
// Lo que el cliente NUNCA hace:
//   ✗ Construir el objeto directamente (no llama a "new Coche()" con 10 parámetros)
//   ✗ Conocer el orden interno de los pasos de construcción
//   ✗ Pedirle el producto al Director (el Director no lo tiene)
//
// Esta separación de responsabilidades es el corazón del patrón Builder.

import { CocheBuilder }         from "./autos/CocheBuilder";
import { ManualBuilder }        from "./autos/ManualBuilder";
import { DirectorDeVehiculos }  from "./autos/DirectorDeVehiculos";

console.log("=".repeat(50));
console.log("EJEMPLO: BUILDER DE AUTOS Y MANUAL");
console.log("=".repeat(50));

// ── PASO 1: Crear el Director y los Builders ────────────────────────
//
// El Director es un objeto reutilizable e independiente.
// No fabrica nada por sí solo — solo conoce las recetas.
const director = new DirectorDeVehiculos();

// Creamos dos builders: uno produce metal, el otro produce papel.
// Desde afuera lucen iguales para el Director (ambos son VehiculoBuilder).
const cocheBuilder  = new CocheBuilder();
const manualBuilder = new ManualBuilder();

console.log("\n--- Super Deportivo ---");

// ── PASO 2: El Director ejecuta la misma receta sobre los dos builders ──
//
// Esta es la línea más importante de la exposición:
// el Director llama exactamente los mismos pasos en ambos casos.
// La diferencia está en quién los ejecuta, no en quién los ordena.
director.construirCocheSuperDeportivo(cocheBuilder);   // produce metal
director.construirCocheSuperDeportivo(manualBuilder);  // produce papel

// ── PASO 3: El cliente recoge el resultado de cada builder ──────────
//
// El Director NO puede entregar el producto porque no sabe qué tipo es.
// (IVehiculoBuilder no tiene método "obtener" — es intencional.)
// Por eso el cliente va directamente a cada builder concreto.
const cocheDeportivo   = cocheBuilder.obtenerCoche();    // retira del CocheBuilder
const manualDeportivo  = manualBuilder.obtenerManual();  // retira del ManualBuilder

cocheDeportivo.describir();
console.log();
manualDeportivo.describir();

// ── BONUS: Coche Familiar ────────────────────────────────────────────
//
// Mismos builders, receta diferente → resultado diferente.
// Notar que el Director omite setComputadoraDeBordo() en esta receta.
// No hay nulls, no hay flags, no hay if/else: solo pasos que se ejecutan o no.
console.log("\n--- Coche Familiar ---");
const familiarBuilder = new CocheBuilder();
director.construirCocheFamiliar(familiarBuilder);
familiarBuilder.obtenerCoche().describir();

// ── BONUS: Sin Director (construcción manual) ────────────────────────
//
// El cliente también puede controlar cada paso sin pasar por el Director.
// Útil cuando se necesita una configuración única que no corresponde
// a ninguna "receta" estándar. El encadenamiento (return this)
// hace el código muy legible, casi como un lenguaje natural.
console.log("\n--- Configuración personalizada (sin Director) ---");
const cocheCustom = new CocheBuilder()
  .setMotor("Eléctrico 300kW")
  .setAsientos(4)
  .setGps()
  // No se activa setComputadoraDeBordo → simplemente no se incluye
  .obtenerCoche();

cocheCustom.describir();