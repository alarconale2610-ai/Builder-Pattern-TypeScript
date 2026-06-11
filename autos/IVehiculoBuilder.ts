// ╔══════════════════════════════════════════════════════════════════╗
// ║  ARCHIVO 1 — IVehiculoBuilder.ts                                  ║
// ║  ROL EN EL PATRÓN: INTERFAZ BUILDER (el "contrato")              ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// ¿QUÉ PROBLEMA RESUELVE ESTE ARCHIVO?
// ─────────────────────────────────────
// Sin esta interfaz, cada builder (CocheBuilder, ManualBuilder, etc.)
// tendría métodos con nombres distintos, firmas distintas, y el
// Director no podría hablarle a ninguno de forma genérica.
//
// Esta interfaz es el "idioma común" que todos los builders deben hablar.
// Gracias a ella, el Director puede construir un coche físico o un manual
// de papel usando EXACTAMENTE el mismo código, sin saber cuál es cuál.
//


export interface IVehiculoBuilder {

  // Paso 1 — Configura qué tipo de motor llevará el vehículo.
  // El builder concreto decide qué hacer con este dato:
  //   → CocheBuilder  : instala el motor físico en el coche
  //   → ManualBuilder : escribe la sección de mantenimiento del motor
  // El Director solo sabe que existe este paso; ignora la implementación.
  setMotor(tipo: string): this;

  // Paso 2 — Configura cuántos asientos tendrá el vehículo.
  // Mismo principio: misma firma, comportamiento completamente distinto
  // según quién implemente la interfaz.
  setAsientos(cantidad: number): this;

  // Paso 3 — Activa el GPS.
  // No recibe parámetros porque es una opción binaria (sí o no).
  // Si el Director no llama a este método, el GPS simplemente no se incluye.
  // → Esto elimina la necesidad de pasar "null" o "false" como en un
  //   constructor tradicional. ¡No más parámetros fantasma!
  setGps(): this;

  // Paso 4 — Activa la computadora de a bordo.
  // Igual que setGps(): un paso opcional que el Director puede omitir
  // dependiendo de la "receta" que esté ejecutando.
  setComputadoraDeBordo(): this;

  // ─────────────────────────────────────────────────────────────────
  // NOTA SOBRE EL TIPO DE RETORNO "this"
  // ─────────────────────────────────────────────────────────────────
  // Todos los métodos devuelven "this" (el propio objeto builder).
  // Esto habilita el "method chaining" o encadenamiento de llamadas:
  //
  //   builder.setMotor("V8").setAsientos(2).setGps()
  //
  // En lugar de tener que escribir:
  //   builder.setMotor("V8");
  //   builder.setAsientos(2);
  //   builder.setGps();
  //
  // Es más legible y refleja mejor la idea de construcción paso a paso.
  // ─────────────────────────────────────────────────────────────────
}